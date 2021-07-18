import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native';
import { CharactersApi } from '../api/characters';
import { CardItem } from '../components';
import { Colors } from '../util/colors';
import { combineReducers } from '../util/combineReducers';
import { responsive } from '../util/responsive';

const initialState = {
  loading: true,
  characters : [],
  nextPage: null,
  page: 1,
  refreshing: false,
};

export const Characters = ({ navigation }) => {

  const [state, setState] = useReducer(combineReducers, initialState);

  const { characters, nextPage, loading, page, refreshing } = state || {};

  const fetchCharacters = async ({ _page = 1}) => {
    const response = await CharactersApi.getAllCharacters({
      page: _page
    });
    const { results = [], info: { next } = {}} = response?.data || {};
    return { results, next };
  };

  const initialPage = async() => {
    const { results, next } = await fetchCharacters({ _page : 1 });
    setState({ characters: results, nextPage: next, loading: false});
  }

  useEffect(() => {
    initialPage();
  }, []);

  const fetchCharactersMore = async () => {
    if (loading || !nextPage) {
      return;
    }

    setState({ loading: true });
    const pageNumber = page + 1 ;
    const { results, next } = await fetchCharacters({ _page : pageNumber });

    const newCharacterList = [
      ...characters,
      ...results,
    ];

    setState({ characters: newCharacterList, nextPage: next, loading: false, page: pageNumber});

  }

  const renderItem = ({ item }) => {
    return <CardItem item={item} />;
  };

  const footerComponent =() => <ActivityIndicator size="large" color={Colors.primary} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Characters</Text>
      <FlatList
        data={characters}
        keyExtractor={(item)=> `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        onEndReachedThreshold={0.5}
        onEndReached={fetchCharactersMore}
        ListFooterComponent={loading && footerComponent}
        ListFooterComponentStyle={styles.footer}
        refreshing={refreshing}
        onRefresh={initialPage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsive.number(18),
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: responsive.fontSize(18),
    fontWeight: 'bold',
  },
  list: {
    paddingTop: responsive.number(12),
  },
  footer: {
    marginVertical: responsive.number(20),
  }
});
