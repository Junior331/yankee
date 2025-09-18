import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { FindCity } from "@/components/organism";
import * as S from "./styles";
import { IHeaderPages } from "./@types";
import { DollarSign, Filter, LocationTarget, Notification } from "@/assets/icons";
import { Loading, Slider } from "@/components/elements";
import { mocks } from "@/services/mocks";
import { useNotificationsContext } from "@/contexts/NotificationsContext";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
export const HeaderPages = ({  title = "yankee", paddingHeader }: IHeaderPages) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  
  // Get real notification count
  const { unreadCount } = useNotificationsContext();

  const [filterActive, setFilterActive] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);

  const handleSetFilter = (value: string, state?: boolean) => {
    setFilterActive(value);
    setShowFilter(state || false);
  };

  const handlePress = (iconName: string) => {
    if (selectedIcon === iconName) {
      setSelectedIcon(null);
    } else {
      setSelectedIcon(iconName);
    }
  };

  const handleUserMenuPress = () => {
    setShowUserMenu(!showUserMenu);
    // Fechar outros menus quando abrir o menu do usuário
    if (!showUserMenu) {
      setShowFilter(false);
    }
  };

  const handleThemePress = () => {
    setShowUserMenu(false);
    setShowThemeModal(true);
  };

  const handleConfigPress = () => {
    setShowUserMenu(false);
    router.push("/(tabs)/profile");
  };

  const handleThemeSelect = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
    setShowThemeModal(false);
  };

  return (
    <S.Container padding={paddingHeader || ''}>
      <S.IconContainer>
        <TouchableOpacity onPress={() => handleSetFilter("", !showFilter)}>
          <Filter color={theme === 'dark' ? Colors.dark.text : Colors.light.text } />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("location")} >
          <LocationTarget color={ selectedIcon === "location" ? "#F00D0D" : theme === 'dark' ? Colors.dark.text : Colors.light.text}  />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress("dollar")}>
          <DollarSign color={selectedIcon === "dollar" ? "red" : theme === 'dark' ? Colors.dark.text : Colors.light.text}  />
        </TouchableOpacity>
      </S.IconContainer>

      {title && <S.Title>{title}</S.Title>}
      <S.ContainerUser>
        <S.ContainerBadge onPress={() => router.push("/(tabs)/notifications")}>
          <Notification color={theme === 'dark' ? Colors.dark.text : Colors.light.text } />

          {unreadCount > 0 && (
            <S.Badge>
              <S.Text>{unreadCount}</S.Text>
            </S.Badge>
          )}
        </S.ContainerBadge>

        <S.ContainerBadge onPress={handleUserMenuPress}>
          <S.ContainerAvatar>
            {imageLoading && <Loading />}
            <Image
              resizeMode="cover"
              onLoadEnd={() => setImageLoading(false)}
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: "https://picsum.photos/200/300",
              }}
            />
          </S.ContainerAvatar>
          <S.Badge>
            <S.Text>5</S.Text>
          </S.Badge>
        </S.ContainerBadge>
      </S.ContainerUser>
      {showFilter && filterActive !== "Miles" && filterActive !== "City" && (
        <S.ContainerFilter>
          {mocks.optionsFilter.map((item) => (
            <>
              <S.OptionFilter key={item.id} onPress={() => handleSetFilter(item.value, true)}>
                {item.icon}
                <S.Text>{item.label}</S.Text>
              </S.OptionFilter>
              <S.Line  />
            </>
          ))}
        </S.ContainerFilter>
      )}

      {showFilter && filterActive === "Miles" && (
        <S.ContainerFilter width="220px">
          <Slider />
        </S.ContainerFilter>
      )}

      {showFilter && filterActive === "City" && (
        <S.ContainerFilter width="220px">
          <FindCity />
        </S.ContainerFilter>
      )}

      {/* Menu do usuário */}
      {showUserMenu && (
        <S.UserMenu>
          <S.UserMenuOption onPress={() => setShowUserMenu(false)}>
            <S.Text color={Colors[theme].text} fontSize="12px">Saldo na conta: ----</S.Text>
          </S.UserMenuOption>
          
          <S.MenuDivider />
          
          <S.UserMenuOption onPress={handleConfigPress}>
            <S.Text color={Colors[theme].text} fontSize="12px">Configurações</S.Text>
          </S.UserMenuOption>
          
          <S.MenuDivider />
          
          <S.UserMenuOption onPress={handleThemePress}>
            <S.Text color={Colors[theme].text} fontSize="12px">Temas: {theme === 'dark' ? 'Escuro' : 'Claro'}</S.Text>
          </S.UserMenuOption>
          
          <S.MenuDivider />
          
          <S.UserMenuOption onPress={() => setShowUserMenu(false)}>
            <S.Text color={Colors[theme].text} fontSize="12px">Ajuda</S.Text>
          </S.UserMenuOption>
          
          <S.MenuDivider />
          
          <S.UserMenuOption onPress={() => setShowUserMenu(false)}>
            <S.Text color={Colors[theme].text} fontSize="12px">Sair</S.Text>
          </S.UserMenuOption>
        </S.UserMenu>
      )}

      {/* Modal de seleção de tema */}
      {showThemeModal && (
        <S.UserMenu>
          <S.UserMenuOption onPress={() => handleThemeSelect('light')}>
            <S.Text color={Colors[theme].text} fontSize="12px">Claro</S.Text>
          </S.UserMenuOption>
          
          <S.MenuDivider />
          
          <S.UserMenuOption onPress={() => handleThemeSelect('dark')}>
            <S.Text color={Colors[theme].text} fontSize="12px">Escuro</S.Text>
          </S.UserMenuOption>
        </S.UserMenu>
      )}
    </S.Container>
  );
};
