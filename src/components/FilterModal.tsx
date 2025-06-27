import React, { ReactNode } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import colors from '../constant/colors';

interface Props {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const { width } = Dimensions.get('window');

const FilterModal: React.FC<Props> = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPressOut={onClose}
      >
      
        <TouchableOpacity activeOpacity={1}>
          
          <View style={styles.sheet}>{children}</View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'flex-end',
  },
  sheet: {
    width: width,
    maxHeight: '75%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 24,
    overflow: 'hidden',          
  },
});
