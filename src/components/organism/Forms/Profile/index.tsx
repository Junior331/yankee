import React from "react";
import { useFormik } from "formik";
import { TextInput } from "react-native";

import * as S from "./styles";
import { Switch } from "@/components/elements";
import { profileSchemas } from "./profileSchema";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

export const Profile = () => {
  const characterLimit = 150;
  const { theme } = useTheme();

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
          <S.Label color={Colors[theme].text}>Name</S.Label>
          <S.Input
            theme={theme}
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
          <S.Label color={Colors[theme].text}>User</S.Label>
          <S.Input
            theme={theme}
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
          <S.Label color={Colors[theme].text}>Link</S.Label>
          <S.Input
            theme={theme}
            nativeID="link"
            value={values.link}
            placeholder={"www.sophiaworld.com"}
            onChangeText={handleChange("link")}
          />
        </S.ContentInput>
      </S.ContainerInput>

      <S.ContainerInput>
        <S.ContentInput>
          <S.Label color={Colors[theme].text}>Description</S.Label>
          <S.InputWrapper>
            <S.Input
              multiline
              as={TextInput}
              theme={theme}
              nativeID="description"
              value={values.description}
              maxLength={characterLimit}
              style={{ height: `auto` }}
              placeholder="Welcome to my world!"
              onChangeText={handleChange("description")}
            />
            <S.CharacterCount color={Colors[theme].text}>
              {values.description.length}/{characterLimit}
            </S.CharacterCount>
          </S.InputWrapper>
        </S.ContentInput>
      </S.ContainerInput>

      <Switch
        theme={theme}
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
        theme={theme}
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
      <S.Button color={Colors[theme].text} >
        <S.Label fontWeight={400} color={Colors[theme].background}>
          Save the changes
        </S.Label>
      </S.Button>
    </S.ContainerForm>
  );
};
