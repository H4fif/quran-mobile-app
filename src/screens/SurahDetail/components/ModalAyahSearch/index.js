import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './styles';

const ModalAyahSearch = ({
  findAyah,
  isOpen,
  onChangeText,
  onPressReset,
  onPressSubmit,
}) => {
  return (
    <Modal visible={isOpen} animationType="slide" transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <View>
            <Text style={styles.modalLabel}>
              Filter ayah by arabic or translation:
            </Text>

            <TextInput
              style={styles.modalInput}
              onChangeText={onChangeText}
              value={findAyah}
            />
          </View>

          <View style={styles.modalFooter}>
            <TouchableOpacity
              onPress={onPressReset}
              style={styles.modalFooterResetButton}>
              <Text style={styles.modalFooterResetLabel}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPressSubmit}
              style={styles.modalFooterSubmitButton}>
              <Text style={styles.modalFooterSubmitLabel}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAyahSearch;
