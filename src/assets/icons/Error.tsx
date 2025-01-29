import React from "react";
import { Image, View } from "react-native";

const Error = () => {
  const gifUrl =
    "https://s3-alpha-sig.figma.com/img/be46/1079/873c9184a2d691120e88cec9c2677d28?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apFYtVD-OUDolbDC3R-hUePoCdt4GZtC3crDNoeMlpq74mW5OdRD6Dp0aEa3VAlkusN29il6T-SPKwb5hS48MyYeRg6p5dePDZCQmGPyAIq2vGQz4sFEh-6e~1Lxp0IZSks--OptQ7WILFvuOLk0vXnxg3GUVQ8JKAimDUrYchHqDFjuD5Q~wJ5SWSy1CRBOHOYYTffNMDQppMI~ZbsYLSFtBloEWtNPP45KjyZc5G5Ti8b2Dc4a5WZ-0yckhcyqhCUt-g8wizYNo0tCjWUIhffMXqFzl7HILWSzdYcEltn1Dw5yHNq-58UQUryYIqWLgW4GM7r6b-baG6WpZ4rQFA__";

  return (
    <View>
      <Image
        source={{ uri: gifUrl }}
        style={{
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};

export default Error;
