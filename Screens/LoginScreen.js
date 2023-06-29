import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { useState } from "react";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLaoding] = useState(false);

  const handleLogin = async () => {
    try {
      setLaoding(true);
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      if (response.data.success) {
        await AsyncStorage.setItem("token", response.data.token);
        navigation.navigate("HomeScreen");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLaoding(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput onChangeText={setEmail} style={styles.textInput} />

      <Text>Password</Text>
      <TextInput style={styles.textInput} onChangeText={setPassword} />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,

    //alignItems: "center",
    //justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    color: "",
    width: "100%",
    marginBottom: 10,
  },

  buttonContainer: {
    backgroundColor: "blue",
    paddingVertical: 12,
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
