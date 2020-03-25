import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";

export default function SecondScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [captured, setCaptured] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  console.log(captured);
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={ref => {
          this.camera = ref;
        }}
        style={{ height: 400 }}
        type={Camera.Constants.Type.front}
        autoFocus={Camera.Constants.AutoFocus.on}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.5,
              alignSelf: "flex-end",
              alignItems: "center"
            }}
            onPress={async () => {
              if (this.camera) {
                let photo = await this.camera.takePictureAsync();
                setCaptured(photo.uri);
                console.log(photo.uri);
              }
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Tirar foto
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
