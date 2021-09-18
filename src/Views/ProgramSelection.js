import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

export const PROGRAMS = [ 'Diet', 'Shred' ];

const ProgramSelection = ({ programs }) => {
    return (
        <View style={styles.bg}>
            <ScrollView>
                {PROGRAMS.filter(x => !programs.includes(x)).map(x => programButton(x))}
            </ScrollView>
        </View>
    );
};

const programButton = (program) => {
    if (program === 'Diet') {
        return (
            <Text>Diet</Text>
        );
    }
    else if (program === 'Shred') {
        return (
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Shred</Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    bg: {
      flex: 1,
      width: '100%',
    },
    button: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        height: 50,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
    }
  });

const mapStateToProps = (state) => {
    return {
      programs: state.programs
    };
  }
  
  export default connect(mapStateToProps)(ProgramSelection);