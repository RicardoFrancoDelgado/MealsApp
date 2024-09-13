import { StyleSheet, View, Pressable, Text, Platform } from "react-native";

function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.itemContainer, , { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    // android shadow
    elevation: 4,
    // IOS shadow
    // color background para aparecer as sombras no IOS
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    // overflow: hidden para o android funciona mas no IOS precisa ser uma condicional para não quebrar o layout
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    //resolve o problema de não aparecer o texto ja que estamos dando tamanho ao elemento pai
    flex: 1,
  },
  buttonPressed: {
    //resolve o problema do android ripple que não existe no android e faz o mesmo efeito ou parecido
    opacity: 0.5,
  },
  itemContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
