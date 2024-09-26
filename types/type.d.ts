import { TextInputProps, TouchableOpacityProps } from "react-native";
declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
}

declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
  }

  declare interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: 'student' | 'admin';  // Or any other roles you might want to add
    profilePic: string;  // URL to the profile picture
    phoneNumber: string;
  }

