import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { router, Tabs } from 'expo-router';
import { Home } from '@tamagui/lucide-icons';
import { useTheme } from 'tamagui';
import { View, Pressable } from 'react-native';
import { Search } from '@tamagui/lucide-icons';
import { Settings } from '@tamagui/lucide-icons';
import { useCustomContext } from '../../../components/Context';
import { Redirect } from 'expo-router';



const RootLayout = () => {    

//     const { LocalSession, setLocalSession, getSessionDevice } =
//       useCustomContext();

//   useEffect(() => {
//       if(!LocalSession){
//         <Redirect href={router.replace("/")}/>
//       }
//   }, [LocalSession]);

    const theme = useTheme();
    const styles = themeStyleSheet(theme);
    
    const TabIcon = ({ focused, icon }) => {
        return (
            <View style={styles.tabIconContainer}>
                <View style={[
                    styles.tabIconWrapper, 
                    focused && styles.focusedIcon
                ]}>
                    {React.cloneElement(icon, { 
                        style: styles.icon,
                        size: 24 
                    })}
                </View>
            </View>
        );
    };

    return (
        <Tabs 
            initialRouteName="home"  
            screenOptions={{ 
                tabBarActiveTintColor: 'white', 
                tabBarShowLabel: false,
                tabBarInactiveTintColor: "white",
                
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 78,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    
                },
                tabBarItemStyle: {
                    flex: 1,
                    height: '100%',
                    alignItems: "center",
                    justifyContent: "center",
                },
                
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    
                    title: "home",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={<Home color="white" />} />,
                    headerShown: false,
                    tabBarButton: (props) => (
                        <Pressable 
                            {...props} 
                            android_ripple={{ borderless: true, color: 'transparent' }} 
                            style={props.style} 
                        />
                    ),
                }}
            />
            <Tabs.Screen 
                name="search"
                options={{
                    // tabBarStyle: {display: "none"},
                    title: "search",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={<Search color="white" />} />,
                    headerShown: false,
                    tabBarButton: (props) => (
                        <Pressable 
                            {...props} 
                            android_ripple={{ borderless: true, color: 'transparent' }} 
                            style={props.style} // Keep original styles
                        />
                    ),
                }}
            />
             <Tabs.Screen 
                name="settings"
                options={{
                    // tabBarStyle: {display: "none"},
                    title: "settings",
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={<Settings color="white" />} />,
                    headerShown: false,
                   
                    tabBarButton: (props) => (
                        <Pressable 
                            {...props} 
                            android_ripple={{ borderless: true, color: 'transparent' }} 
                            style={props.style} // Keep original styles
                        />
                    ),
                }}
            />

           
          
        </Tabs>
    );
};

export default RootLayout;

const themeStyleSheet = (theme) => StyleSheet.create({
    tabIconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: '100%',
        width: '100%',
    },
    tabIconWrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -5 }],
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    focusedIcon: {
        backgroundColor: theme.color7.val,
    },
    icon: {
        alignSelf: "center",
    },
});
