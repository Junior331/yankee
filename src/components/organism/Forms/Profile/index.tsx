import React, { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import { TextInput, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

import * as S from "./styles";
import { Switch } from "@/components/elements";
import { profileSchemas } from "./profileSchema";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

export const Profile = () => {
  const characterLimit = 150;
  const { theme } = useTheme();

  // Refs para navegação entre campos
  const nameRef = useRef<TextInput>(null);
  const nicknameRef = useRef<TextInput>(null);
  const linkRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);

  // Estado para controlar se deve mostrar o erro de username
  const [showUsernameError, setShowUsernameError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      link: "",
      nickname: "",
      description: "",
      share_my_location: false,
      share_my_crowd_verification: false,
    },
    validationSchema: profileSchemas,
    onSubmit: async () => {
      try {
        Alert.alert("Success", "Profile updated successfully!");
      } catch (error) {
        Alert.alert("Error", "Failed to update profile. Please try again.");
      }
    },
  });
  const { values, handleChange, handleSubmit, errors, touched } = formik;

  // Simula verificação de username com 50% de chance de erro
  useEffect(() => {
    if (touched.name && !errors.name && values.name && values.name.length > 3) {
      const shouldShowError = Math.random() > 0.5;
      setShowUsernameError(shouldShowError);
    } else {
      setShowUsernameError(false);
    }
  }, [values.name, touched.name, errors.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 120
        }}
      >
        <S.ContainerForm>
            <S.ContainerInput>
        <S.ContentInput>
          <S.Label color={Colors[theme].text}>Name</S.Label>
          <S.Input
            ref={nameRef}
            theme={theme}
            nativeID="name"
            value={values.name}
            autoComplete="name"
            placeholder={"Sophia Carter"}
            onChangeText={handleChange("name")}
            returnKeyType="next"
            onSubmitEditing={() => nicknameRef.current?.focus()}
          />
        </S.ContentInput>
        {touched.name && errors.name && (
          <S.MessageError>{errors.name}</S.MessageError>
        )}
        {touched.name && !errors.name && values.name && (
          <S.ValidationText color={Colors[theme].text}>
            • After changing your username/name, you can only modify it again after 7 days.
          </S.ValidationText>
        )}
        {touched.name && !errors.name && values.name && (
          <S.ValidationText color={Colors[theme].text}>
            • You will be able to change your username/name back within 14 days.
          </S.ValidationText>
        )}
        {showUsernameError && (
          <S.ErrorText>This username already exists</S.ErrorText>
        )}
      </S.ContainerInput>

      <S.ContainerInput>
        <S.ContentInput>
          <S.Label color={Colors[theme].text}>User</S.Label>
          <S.Input
            ref={nicknameRef}
            theme={theme}
            nativeID="nickname"
            value={values.nickname}
            autoComplete="nickname"
            placeholder={"SophiaKindVibes"}
            onChangeText={handleChange("nickname")}
            returnKeyType="next"
            onSubmitEditing={() => linkRef.current?.focus()}
          />
        </S.ContentInput>
        {touched.nickname && errors.nickname && (
          <S.MessageError>{errors.nickname}</S.MessageError>
        )}
      </S.ContainerInput>

      <S.ContainerInput>
        <S.ContentInput>
          <S.Label color={Colors[theme].text}>Link</S.Label>
          <S.Input
            ref={linkRef}
            theme={theme}
            nativeID="link"
            value={values.link}
            placeholder={"www.sophiaworld.com"}
            onChangeText={handleChange("link")}
            returnKeyType="next"
            onSubmitEditing={() => descriptionRef.current?.focus()}
          />
        </S.ContentInput>
        {touched.link && errors.link && (
          <S.MessageError>{errors.link}</S.MessageError>
        )}
      </S.ContainerInput>

      <S.ContainerInput>
        <S.ContentInput>
          <S.Label color={Colors[theme].text}>Description</S.Label>
          <S.InputWrapper>
            <S.Input
              ref={descriptionRef}
              multiline
              as={TextInput}
              theme={theme}
              nativeID="description"
              value={values.description}
              maxLength={characterLimit}
              style={{ height: 60, textAlignVertical: 'top' }}
              placeholder="Welcome to my world!"
              onChangeText={handleChange("description")}
              returnKeyType="done"
              blurOnSubmit={true}
            />
            <S.CharacterCount color={Colors[theme].text}>
              {values.description.length}/{characterLimit}
            </S.CharacterCount>
          </S.InputWrapper>
        </S.ContentInput>
        {touched.description && errors.description && (
          <S.MessageError>{errors.description}</S.MessageError>
        )}
        {values.description.length > 0 && (
          <S.ValidationText color={Colors[theme].text}>
            • Your description is visible to everyone.
          </S.ValidationText>
        )}
        {values.description.length >= characterLimit && (
          <S.ErrorText>Your description has exceeded the character limit.</S.ErrorText>
        )}
      </S.ContainerInput>

      <Switch
        theme={theme}
        isActive={values.share_my_location}
        style={{
          width: "100%",
          flexDirection: "row-reverse",
        }}
        label="Allow people to see your location"
        handleToggle={(value) =>
          formik.setFieldValue("share_my_location", value)
        }
      />
      <Switch
        theme={theme}
        style={{
          width: "100%",
          flexDirection: "row-reverse",
        }}
        isActive={values.share_my_crowd_verification}
        label="Allow people to see your crowd verification badge"
        handleToggle={(value) =>
          formik.setFieldValue("share_my_crowd_verification", value)
        }
      />
            <S.Button onPress={() => handleSubmit()} color={Colors[theme].text}>
              <S.Label fontWeight={400} color={Colors[theme].background}>
                Save the changes
              </S.Label>
            </S.Button>
        </S.ContainerForm>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
