import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Colors from '../utils/Colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
// import { Ionicons } from '@expo/vector-icons';
// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PageHeader from './PageHeader';




const EmployeeForm = () => {
    const [empName, setEmpName] = useState('');
    const [employerName, setEmployerName] = useState('');
    const [employeeCode, setEmployeeCode] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [preferTime, setPreferTime] = useState('');
    const [preferMode, setPreferMode] = useState('');
    const [ic, setIC] = useState('');
    const [dependentName, setDependentName] = useState('');
    const [upload, setUpload] = useState('');
    const [dob, setDOB] = useState('');
    const [gender, setGender] = useState('');
    const [briefDetail, setBriefDetail] = useState('');
    const [specific, setSpecific] = useState('');
    const [relationship, setRelationship] = useState('');
    const [tos, setTOS] = useState('');
    const [requestingFor, setRequestingFor] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [otherSpeciality, setOtherSpeciality] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dependentAge, setDependentAge] = useState('');


    const route = useRoute();
    const { type } = route.params || {};

    useEffect(() => {
        setTOS(type)
    }, [type])

    const handlePickerChange = (itemValue) => {
        setTOS(itemValue);
    };

    const getDescription = () => {
        if (!tos) return null;

        switch (tos) {
            case 'Benefit Navigation':
                return 'Start an inquiry to better understand your Health Navigation benefits (Internal Service Type: Benefits Navigation, Service Inquiry, Bill Resolve through Claim Medic)';
            case 'Get a second option':
                return 'Do you have questions about a new diagnosis or treatment plan? (Internal Service Type: PL, PRR, FA, MedIntel Other, PL + FA, RSO, Pathology Re-read, Radiology Re-read, Case Review/Consultation)';
            case 'Manage an Existing Condition':
                return `Are you seeking support in managing an existing condition? (Internal Service Type: PL, PRR, FA, MedIntel Other, PL + FA, Case Review/Consultation)
1 : Provider List
2 : Provider Research report (PRR)
3: Facilitated Appointment
4: Case review`;
            case 'Be Proactive About Your Health':
                return `Tell us your goal and we can find the best resources for you! (Internal Service Type: Case Review, Medical Intelligence Report, Physician Report Card)
1 : Medical Intelligence Report
2 : Physician Report Card`;
            case 'Discuss another concern':
                return 'Let us navigate you through a health concern or question, such as finding a Primary Care Physician or other routine care providers. (Internal Service Type: PL, Case Review)';
            default:
                return null;
        }
    };
    const getSelectedMessage = () => {
        if (!tos) return null;

        switch (tos) {
            case 'Benefit Navigation':
                return 'Terms and Conditions ';
            case 'Get a second option':
                return 'Terms and Conditions, Insurance Card, Demographic Form, Medical Release Form, Provider List, Information Sharing Form ';
            case 'Manage an Existing Condition':
                return `Terms and Conditions, Insurance Card, Demographic Form, Medical Release Form, Provider List, Information Sharing Form `;
            case 'Be Proactive About Your Health':
                return 'Terms and Conditions ';
            case 'Discuss another concern':
                return 'Terms and Conditions, Insurance Card, Demographic Form, Medical Release Form, Provider List, Information Sharing Form ';
            default:
                return null;
        }
    };


    const handleSubmit = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };
    const navigation = useNavigation();


    return (
        <ScrollView>
            <PageHeader title={'New service request'} />

            {/* // <ImageBackground source={require('../../assets/Images/LoginBackground2.jpg')} style={styles.backgroundImage}> */}
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginTop: 20, color: Colors.BLACK }}>
                    New service request<Text style={{ color: Colors.PRIMARY }}>Sun Life Health 360
                    </Text>
                </Text>
                <View style={{ width: '100%', marginTop: 30 }}>
                    <Text style={styles.label}>Employee Name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmpName}
                        value={empName}
                        placeholder="Enter employee name"
                        keyboardType='default'
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Employer Name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmployerName}
                        value={employerName}
                        placeholder="Enter employer name"
                        keyboardType='default'
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Employee Code:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmployeeCode}
                        value={employeeCode}
                        placeholder="Enter employee code"
                        keyboardType='default'
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Designation/Job title</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setJobTitle}
                        value={jobTitle}
                        placeholder="Enter Designation/Job title"
                        keyboardType='default'
                        autoCapitalize="none"
                    />


                    <Text style={styles.label}>Type of Service</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={tos}
                            onValueChange={(itemValue, itemIndex) => setTOS(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                        >
                            <Picker.Item label="Select type of service" value="" />
                            <Picker.Item label="Benefit Navigation" value="Benefit Navigation" />
                            <Picker.Item label="Get a second option" value="Get a second option" />
                            <Picker.Item label="Manage an Existing Condition" value="Manage an Existing Condition" />
                            <Picker.Item label="Be Proactive About Your Health" value="Be Proactive About Your Health" />
                            <Picker.Item label="Discuss another concern" value="Discuss another concern" />
                            {/* Add more items as needed */}
                        </Picker>
                    </View>

                    {getDescription() != null ?
                        <Text style={styles.selectedMessage}>
                            Description: {getDescription()}
                        </Text> : ''}


                    <Text style={styles.label}>Specialty</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={speciality}
                            onValueChange={(itemValue, itemIndex) => setSpeciality(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                        >
                            <Picker.Item label="Select speciality" value="" />
                            <Picker.Item label="Addiction Psychiatry" value="Addiction Psychiatry" />
                            <Picker.Item label="Child Psychiatry" value="Child Psychiatry" />
                            <Picker.Item label="Clinical Professional Counselor-LCPC" value="Clinical Professional Counselor-LCPC" />
                            <Picker.Item label="Dermatology" value="Dermatology" />
                            <Picker.Item label="Endocrinology and Metabolism" value="Endocrinology and Metabolism" />
                            <Picker.Item label="Family Medicine" value="Family Medicine" />
                            <Picker.Item label="Gastroenterology" value="Gastroenterology" />
                            <Picker.Item label="General Preventive Medicine" value="General Preventive Medicine" />
                            <Picker.Item label="Geriatric Medicine" value="Geriatric Medicine" />
                            <Picker.Item label="Gynecology" value="Gynecology" />
                            <Picker.Item label="Internal Medicine" value="Internal Medicine" />
                            <Picker.Item label="Marriage and Family Therapist-LMFT" value="Marriage and Family Therapist-LMFT" />
                            <Picker.Item label="Maternal-Fetal Medicine" value="Maternal-Fetal Medicine" />
                            <Picker.Item label="Mental Health Counselor-LMHC" value="Mental Health Counselor-LMHC" />
                            <Picker.Item label="Nutrition" value="Nutrition" />
                            <Picker.Item label="Obstetrics and Gynecology" value="Obstetrics and Gynecology" />
                            <Picker.Item label="Psychiatry" value="Psychiatry" />
                            <Picker.Item label="Surgery" value="Surgery" />
                            <Picker.Item label="Therapy" value="Therapy" />
                            <Picker.Item label="Urology" value="Urology" />
                            <Picker.Item label="Other" value="Other" />
                            {/* Add more items as needed */}
                        </Picker>
                    </View>

                    {speciality == 'Other' ?
                        <TextInput
                            style={[styles.input]}
                            onChangeText={setOtherSpeciality}
                            value={otherSpeciality}
                            placeholder="Enter what speciality you want"
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                        /> : <></>
                    }

                    <Text style={styles.label}>Mobile:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMobile}
                        value={mobile}
                        placeholder="Enter your mobile"
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />


                    <Text style={styles.label}>Requesting For: </Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={requestingFor}
                            onValueChange={(itemValue, itemIndex) => setRequestingFor(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                        >
                            <Picker.Item label="Requesting For" value="" />
                            <Picker.Item label="Self" value="Self" />
                            <Picker.Item label="Dependent" value="Dependent" />
                        </Picker>
                    </View>
                    {requestingFor == 'Dependent' ?
                        <>
                            <Text style={styles.label}>Dependent's Name: </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setDependentName}
                                value={dependentName}
                                placeholder="Dependent's Name"
                                keyboardType='default'
                                autoCapitalize="none"
                            />
                            <Text style={styles.label}>Relationship to Employee: </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setRelationship}
                                value={relationship}
                                placeholder="Dependent Relationship"
                                keyboardType='default'
                                autoCapitalize="none"
                            />
                            <Text style={styles.label}>Dependent Age: </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={setDependentAge}
                                value={dependentAge}
                                placeholder="Dependent Age"
                                keyboardType='default'
                                autoCapitalize="none"
                            />
                            <Text style={styles.label}>Dependent Gender</Text>
                            <View style={styles.pickerContainer}>
                                <Picker
                                    selectedValue={gender}
                                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                                    style={styles.picker}
                                    itemStyle={styles.pickerItem}
                                >
                                    <Picker.Item label="Select Gender" value="" />
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                    {/* Add more items as needed */}
                                </Picker>
                            </View>
                        </>

                        : <></>}

                    <Text style={styles.label}>Location: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setLocation}
                        value={location}
                        placeholder="Location"
                        keyboardType='default'
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Preferred Time to contact: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPreferTime}
                        value={preferTime}
                        placeholder="Preferred Time to contact"
                        keyboardType='default'
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Preferred mode of contact: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPreferMode}
                        value={preferMode}
                        placeholder="Preferred mode of contact"
                        keyboardType='default'
                        autoCapitalize="none"
                    />
                    <Text style={styles.label}>Insurance Carrier: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setIC}
                        value={ic}
                        placeholder="Insurance Carrier"
                        keyboardType='default'
                        autoCapitalize="none"
                    />





                    <Text style={styles.label}>Insurance Carrier: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setDOB}
                        value={dob}
                        placeholder="Insurance Carrier"
                        keyboardType='default'
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Please provide a breif detail of your request: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setBriefDetail}
                        value={briefDetail}
                        placeholder="Breif detail of your request"
                        keyboardType='default'
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Anything Specific: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setSpecific}
                        value={specific}
                        placeholder="Write here if anything specific is required"
                        keyboardType='default'
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>Upload your files: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUpload}
                        value={upload}
                        placeholder="Upload files   🔗"
                        keyboardType='default'
                        autoCapitalize="none"
                    />




                    <Text style={styles.selectedMessage}>
                        *{getSelectedMessage()}
                    </Text>
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={{ textAlign: 'center', color: Colors.WHITE }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginBottom: 50 }}></View>
            {/* // </ ImageBackground> */}
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        marginLeft: 3,
        fontWeight: 'bold',
        fontSize: 17,
        color: Colors.BLACK
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 5,
        marginBottom: 15,
        paddingHorizontal: 20,

    },
    button: {
        padding: 16,
        backgroundColor: Colors.PRIMARY,
        marginTop: 10,
        borderRadius: 99,
        paddingHorizontal: 100,
        height: 60,
        justifyContent: 'center'
    },

    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 5,
        marginBottom: 15
    },
    picker: {
        width: '100%',
        height: 50,
    },
    pickerItem: {
        height: 30,
    },
    selectedMessage: {
        marginTop: 0,
        fontStyle: 'italic',
        color: Colors.PRIMARY,
        marginBottom: 15
    },
});

export default EmployeeForm;
