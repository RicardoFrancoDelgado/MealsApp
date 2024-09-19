import { Text } from "react-native";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  return <Text>Cheguei nessa tela que tem o ID = ({mealId})</Text>;
}

export default MealDetailScreen;
