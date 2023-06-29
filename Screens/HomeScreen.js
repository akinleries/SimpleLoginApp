import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  const fetchRegisteredUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");

      setUsers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  return (
    <View>
      <Text>Homeeeeeeee</Text>
    </View>
  );
};

export default HomeScreen;
