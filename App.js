import { StatusBar } from 'expo-status-bar';//thêm thư viện thanh bar
import React from 'react';
import { Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Constants from 'expo-constants'; 
import { FontAwesome5 } from '@expo/vector-icons'; //thêm thư viện icon

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      {/* đổi màu thanh bar */}
      <StatusBar style="light" />
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/*đẩy content xuống để test KeyboardAvoidingView & keyboard*/}
      <View style={{flex: 1,justifyContent:'center'}}> 
        {/*Phần 1: hiển thị thông tin  */}
        <View style={styles.content}>
            <Text style={styles.hiText}> Xin chào! </Text>
            <Text style={styles.userText}> HOANG QUOC PHONG </Text>
            <Text style={styles.userText}> 0365579151 </Text>
        </View>
        {/* Phần 2: ô nhập mật khẩu */}
        <View style= {styles.viewPass}>
          <FontAwesome5 name="lock" size={15} color="#929292" style={{
            position: 'absolute',
            top: 51,
            left: 30,
            zIndex: 10,
          }}/>
            <TextInput style={styles.inputPass}
              maxLength = {6}
              placeholder="Nhập mật khẩu"
              placeholderTextColor = "#929292"
              keyboardType="numeric"
              secureTextEntry={true}
            />
        </View>
        {/* Phần 3: Button đăng nhập,quên mật khẩu, thoát tài khoản */}
        <View>
            {/*phần đăng nhập  */}
            <View style = {styles.viewButton}> 
              <TouchableOpacity style = {styles.bLogin}> 
              <Text style = {styles.textLogin}>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
            </View>
            {/* phần quên tk, thoát tk */}
            <View style = {styles.action}> 
              <TouchableOpacity style = {styles.bAction}> 
                <Text style = {styles.textF}>QUÊN MẬT KHẨU</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.bAction}> 
                <Text style = {styles.textF}>THOÁT TÀI KHOẢN</Text>
              </TouchableOpacity>
            </View>

        </View>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const TEXT = {
  color: '#fff',
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0006d',
    paddingTop: Constants.statusBarHeight ,
  },
  content: {
    paddingTop: 60,
  },
  textWap: {
    
  },
  hiText: {
    ...TEXT,
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  userText: {
    ...TEXT,
    paddingBottom: 15,
  },

  viewPass: {
    paddingTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },
  inputPass: {
    fontSize: 17,
    textAlign: 'center',
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  bLogin: {
    backgroundColor: 'red' ,
    marginTop: 15,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  viewButton: {
    marginRight: 30,
    marginLeft: 30,
  },
  textLogin: {
    ...TEXT,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  bAction: {
    marginRight: 32,
    marginLeft: 32,
  },
  textF: {
    ...TEXT,
  },
});
