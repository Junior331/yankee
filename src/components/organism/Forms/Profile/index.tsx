import React from "react";
import { useFormik } from "formik";
import { TextInput } from "react-native";

import * as S from "./styles";
import { Switch } from "@/components/elements";
import { profileSchemas } from "./profileSchema";

export const Profile = () => {
  const characterLimit = 150;

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
    onSubmit: async (values) => {
      console.log("values ::", values);
    },
  });
  const { values, handleChange, handleSubmit, errors, touched } = formik;

  return (
    <S.ContainerForm>
      <S.ContainerInput>
        <S.ContentInput>
          <S.Label>Name</S.Label>
          <S.Input
            nativeID="name"
            value={values.name}
            autoComplete="name"
            placeholder={"Sophia Carter"}
            onChangeText={handleChange("name")}
          />
        </S.ContentInput>
        {touched.name && errors.name && (
          <S.MessageError>{errors.name}</S.MessageError>
        )}
      </S.ContainerInput>

      <S.ContainerInput>
        <S.ContentInput>
          <S.Label>User</S.Label>
          <S.Input
            nativeID="nickname"
            value={values.nickname}
            autoComplete="nickname"
            placeholder={"SophiaKindVibes"}
            onChangeText={handleChange("nickname")}
          />
        </S.ContentInput>
        {touched.nickname && errors.nickname && (
          <S.MessageError>{errors.nickname}</S.MessageError>
        )}
      </S.ContainerInput>

      <S.ContainerInput>
        <S.ContentInput>
          <S.Label>Link</S.Label>
          <S.Input
            nativeID="link"
            value={values.link}
            autoComplete="link"
            placeholder={"www.sophiaworld.com"}
            onChangeText={handleChange("link")}
          />
        </S.ContentInput>
      </S.ContainerInput>

      <S.ContainerInput>
        <S.ContentInput>
          <S.Label>Description</S.Label>
          <S.InputWrapper>
            <S.Input
              multiline
              as={TextInput}
              nativeID="description"
              value={values.description}
              autoComplete="description"
              maxLength={characterLimit}
              style={{ height: `auto` }}
              placeholder="Welcome to my world!"
              onChangeText={handleChange("description")}
            />
            <S.CharacterCount>
              {values.description.length}/{characterLimit}
            </S.CharacterCount>
          </S.InputWrapper>
        </S.ContentInput>
      </S.ContainerInput>

      <Switch
        isActive={values.share_my_location}
        style={{
          width: "90%",
          maxWidth: 270,
          flexDirection: "row-reverse",
        }}
        label="Allow people to see your location"
        handleToggle={(value) =>
          formik.setFieldValue("share_my_location", value)
        }
      />
      <Switch
        style={{
          width: "90%",
          maxWidth: 270,
          flexDirection: "row-reverse",
        }}
        isActive={values.share_my_crowd_verification}
        label="Allow people to see your crowd verification badge"
        handleToggle={(value) =>
          formik.setFieldValue("share_my_crowd_verification", value)
        }
      />
      <S.Button onPress={handleSubmit}>
        <S.Label fontWeight={400} color="#000000">
          Save the changes
        </S.Label>
      </S.Button>
    </S.ContainerForm>
  );
};
