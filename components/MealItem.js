import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionItem}>{duration}m</Text>
            <Text style={styles.descriptionItem}>
              {complexity.toUpperCase()}
            </Text>
            <Text style={styles.descriptionItem}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    margin: 16,
    elevation: 4,
    // IOS shadow
    // color background para aparecer as sombras no IOS
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    fontSize: 22,
  },
  description: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 8,
  },
  descriptionItem: {
    fontSize: 12,
  },
  buttonPressed: {
    //resolve o problema do android ripple que não existe no android e faz o mesmo efeito ou parecido
    opacity: 0.5,
  },
});

export default MealItem;
