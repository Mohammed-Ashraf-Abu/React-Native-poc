import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from 'react-native';
import Labelcomponent from '../../Components/text/Text';
import TextBox from '../../Components/textBox/TextBox';
import {loginStyle} from './LoginStyle';
import ImageIcon from '../../Components/image/imageIcon/ImageIcon';
import ButtonComponent from '../../Components/button/Button';
import {useState} from 'react';
import {emailValidate, passwordValidate} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function LoginScreen({navigation}: Props) {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState({userEmail: '', userPass: ''});

  useNavigation();

  const trackPass = (text: string) => {
    setPass(text);
  };

  const trackEmail = (text: string) => {
    setEmail(text);
  };

  const onPressed = () => {
    const emailCheck = emailValidate(email);
    const passCheck = passwordValidate(pass);
    console.log(emailCheck, passCheck);
    const errors = {userEmail: '', userPass: ''};

    if (!emailCheck && !passCheck) {
      errors.userEmail = 'Please enter Valid Email';
      errors.userPass = 'Please enter Valid Password';
    } else if (!emailCheck) {
      errors.userEmail = 'Please enter Valid Email';
    } else if (!passCheck) {
      errors.userEmail = 'Please enter Valid Password';
    } else if (emailCheck && passCheck) {
      navigation.navigate('Home');
    }

    setErr(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={loginStyle.loginContainer}>
        <View style={loginStyle.titleImage}>
          <Image
            source={require('../../asserts/swivl.png')}
            style={{
              width: 100,
              objectFit: 'contain',
            }}
          />
        </View>
        <View style={loginStyle.loginInputs}>
          <Labelcomponent value="Log-In" type="Heading" />
          <TextBox
            placeholder="Email"
            secure={false}
            value={email}
            onChangeText={trackEmail}
            textContentType="emailAddress"
          />
          {err.userEmail ? (
            <Text style={loginStyle.errorText}>{err.userEmail}</Text>
          ) : null}
          <TextBox
            placeholder="Password"
            secure={true}
            value={pass}
            onChangeText={trackPass}
          />
          {err.userPass ? (
            <Text style={loginStyle.errorText}>{err.userPass}</Text>
          ) : null}
          <ButtonComponent
            value="Log-In"
            textColor="white"
            onPress={onPressed}
            children={undefined}
          />
        </View>
        <View style={{flexDirection: 'row', marginLeft: 70}}>
          <Labelcomponent value="Don't have an account ? " type="Normal" />
          <Labelcomponent value="Sign-up" type="Link" />
        </View>
        <Text style={{fontWeight: '400', textAlign: 'center', marginTop: 10}}>
          or
        </Text>
        <Pressable
          onPress={() => {}}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 15,
            marginBottom: 20,
          }}>
          <ImageIcon location={require('../../asserts/google.png')} />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
