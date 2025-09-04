import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Alert, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { Layout } from "@/components/organism";
import * as S from "./styles";

export const StartLive = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [description, setDescription] = useState("");

  const handleStartLive = () => {
    if (!title.trim()) {
      Alert.alert("Erro", "Por favor, adicione um título para a live");
      return;
    }

    // Simula o início de uma live
    const liveData = {
      liveId: Date.now(),
      title: title.trim(),
      location: location.trim() || "Lorem ipsum sit dolor amet",
      hashtags: hashtags.trim() || "Lorem ipsum sit dolor amet",
      description:
        description.trim() ||
        "Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet.",
    };

    // Navigate para a tela de Live
    router.push(`/live?liveId=${liveData.liveId}`);
  };

  return (
    <Layout style={{ position: "relative" }}>
      <S.Container>
        <S.BackgroundImage
          source={{ uri: "https://picsum.photos/seed/live-bg/400/800" }}
          resizeMode="cover"
        >
          <S.GradientOverlay
            colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
            start={[0, 0]}
            end={[0, 1]}
          />

          <S.Header>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => router.back()}
            >
              <S.CloseIcon>✕</S.CloseIcon>
            </TouchableOpacity>
          </S.Header>

          <S.Content>
            <S.FormContainer>
              <S.FormField>
                <S.Label>Title:</S.Label>
                <TextInput
                  style={styles.input}
                  value={title}
                  onChangeText={setTitle}
                  placeholder="Lorem ipsum sit dolor amet"
                  placeholderTextColor="#999"
                />
              </S.FormField>

              <S.FormField>
                <S.Label>Localization:</S.Label>
                <TextInput
                  style={styles.input}
                  value={location}
                  onChangeText={setLocation}
                  placeholder="Lorem ipsum sit dolor amet"
                  placeholderTextColor="#999"
                />
              </S.FormField>

              <S.FormField>
                <S.Label>Hashtags:</S.Label>
                <TextInput
                  style={styles.input}
                  value={hashtags}
                  onChangeText={setHashtags}
                  placeholder="Lorem ipsum sit dolor amet"
                  placeholderTextColor="#999"
                />
              </S.FormField>

              <S.FormField>
                <S.Label>Description:</S.Label>
                <TextInput
                  style={styles.textArea}
                  value={description}
                  onChangeText={setDescription}
                  placeholder="Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet, Lorem ipsum sit dolor amet."
                  placeholderTextColor="#999"
                  multiline
                  numberOfLines={5}
                  textAlignVertical="top"
                />
              </S.FormField>
            </S.FormContainer>

            <S.StartButton onPress={handleStartLive}>
              <S.StartButtonText>Iniciar uma live</S.StartButtonText>
            </S.StartButton>
          </S.Content>
        </S.BackgroundImage>
      </S.Container>
    </Layout>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    fontSize: 14,
  },
  textArea: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    fontSize: 14,
    minHeight: 100,
  },
});
