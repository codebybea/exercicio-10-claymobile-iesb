import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022],
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024],
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025],
  },
];

export default function TitulosScreen() {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.nome}</Title>
        <Paragraph>Anos: {item.anos.join(", ")}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  card: { marginBottom: 16 },
});
