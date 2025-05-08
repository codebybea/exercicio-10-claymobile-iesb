import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const time = {
  nome: "Flamengo",
  escudo:
    "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"],
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Image
            source={{ uri: time.escudo }}
            style={styles.shield}
            resizeMode="contain"
          />
          <Title style={styles.title}>{time.nome}</Title>
          <Paragraph>Fundação: {time.fundacao}</Paragraph>
          <Paragraph>Estádio: {time.estadio}</Paragraph>
          <Paragraph>Mascote: {time.mascote}</Paragraph>
          <Paragraph>Cores: {time.cores.join(", ")}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  card: { marginBottom: 16, alignItems: "center" },
  shield: { width: 150, height: 150, marginBottom: 16 },
  title: { textAlign: "center", color: "#e91e63" },
});
