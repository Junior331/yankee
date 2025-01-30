import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const { width, height } = Dimensions.get("window");

const stories = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/fb0d/2197/3d8800dd0e0361a4f48a42783d1136e1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IFq93om40aZZ2ljDwRtsTXgaXQUdzrhpzUCOEk6Nv2h3QYTZiTTDoNw6th0NTHoZ6wH~gInBaBO-kUBmiIFJmdn8G28SAh3jdFL55QlfyeaIPZjzCimD8M8uSDliSq4-pDjWl2QQ6P1EEHtf9PgMzSuo70B3xr7380VZoozJ-7nuZE~WkyjWJvWGzAU9INt8Vq-7fUp8pjJ4IRXFHQ9WiEI6ZTmdQYQa4XHq62IQO5niDbGEnnzzQz2xIx1ALdTiu8lwyA-6fbdyhyMisA5PtWiP9HuC~XtL3g~MT30LiyLaVZ~IveNJCys-bNG~vpUcxKfHx3DSe35glhBJlSgM9g__",
    duration: 5000,
  },

  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/1a01/ac70/5f6fb9c81ef82fbeb7699ca51568c536?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMW6Oh9UCg4LtIISc0EAeks5alpZ~DJf1Ck5GDzh0T--YpqFxABMFvF~fzuL~UQCl7zPrPHN~e--0A-5hl9OF34YtQtEnlGHVNH6lIvIN-P-q0Z0edm9nFeHxAZue8OCIbU-4h8qRvMEn3t5TNbRqsccbBrMC-c~Q-jNkx2vhe7Gd~SqZGEfrcONlrkktTmamjT8GqHAd24Mfd3JT2z92-FN1rXjZCLxMHSLomrZYjyTmeOY25KGi1yuICHqJ-zdUq~7Al4mAM3sSfNXjqLLEilopvhxM8E1Z7H~npMYl-PDivxoTQH1gdaUgsiT4OWkSsc8LdejLSFLT-H9HjQQyA__",
    duration: 3000,
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/27f2/5b13/0b3cc76484a5ff8327020153df6b21ce?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DTivFM6MHvbSjoIYFVev186MY~sr74Q6N76PLLz6Apfsdcl5JJibzXQn2N5yYbVykCYXuChe39OQ3Wh45Jg4hRFzlW0spm~wvxgPbu6j-jT4LT9tqVZqVdSwVtnHJn3k7R00tE3V0vkF9pGKH7jhqLrysyhgpnEVTaYlD3PZsJKaZzKLJGPBMZL3ruMoyZzHBaKP8x-mUYsROpJ25wVDm2uhZ7KtHHHsUDZTycNPz5iEnZql9PG1P9qZTwp6qXgzZMK2MyAJAit5AY6mELSH3CgWlnQnwa2DkFY72Zf0ZhB36cANE0xf0ANrkqSNJFnV6UBLtrdQ~OjptpVQOxO7dg__",
    duration: 4000,
  },
];

const StoryComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextStory();
    }, stories[currentIndex]?.duration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Final dos stories - reinicia ou fecha
      setCurrentIndex(0);
    }
  };

  const handlePreviousStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem do Story */}
      <Image
        source={{ uri: stories[currentIndex].image }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Barras de progresso */}
      <View style={styles.progressContainer}>
        {stories.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              {
                flex: index <= currentIndex ? 1 : 0,
                backgroundColor:
                  index < currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
              },
            ]}
          />
        ))}
      </View>

      {/* Navegação por toque */}
      <View style={styles.touchContainer}>
        {/* Anterior */}
        <TouchableWithoutFeedback onPress={handlePreviousStory}>
          <View style={styles.touchArea} />
        </TouchableWithoutFeedback>

        {/* Próximo */}
        <TouchableWithoutFeedback onPress={handleNextStory}>
          <View style={styles.touchArea} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: width,
    height: height,
    position: "absolute",
  },
  progressContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 40,
    left: 10,
    right: 10,
    justifyContent: "space-between",
  },
  progressBar: {
    height: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginHorizontal: 2,
    flex: 1,
  },
  touchContainer: {
    flexDirection: "row",
    flex: 1,
  },
  touchArea: {
    flex: 1,
  },
});

export default StoryComponent;
