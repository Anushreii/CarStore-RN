// // components/KeyboardWrapper.tsx
// import React from 'react';
// import {
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   TouchableWithoutFeedback,
//   Keyboard,
//   StyleSheet,
//   ViewStyle,
// } from 'react-native';

// interface Props {
//   children: React.ReactNode;
//   style?: ViewStyle;
// }

// const KeyboardWrapper: React.FC<Props> = ({ children, style }) => {
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         style={{ flex: 1 }}
//       >
//         <ScrollView
//           contentContainerStyle={[styles.container, style]}
//           keyboardShouldPersistTaps="handled"
//         >
//           {children}
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </TouchableWithoutFeedback>
//   );
// };

// export default KeyboardWrapper;

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
