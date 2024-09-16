import { View, Text, Image, Pressable, StyleSheet } from "react-native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{duration}</Text>
          <Text>{complexity}</Text>
          <Text>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPressed: {
    //resolve o problema do android ripple que não existe no android e faz o mesmo efeito ou parecido
    opacity: 0.5,
  },
});

export default MealItem;
