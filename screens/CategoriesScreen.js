import{FlatList} from 'react-native';
import { FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from './components/CategoryGridTile';

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile 
    title={itemData.title}
    color={itemData.color}
    />
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <FlatList data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreen;