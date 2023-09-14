import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const AccordionGroupStyles = theme =>
  StyleSheet.create({ Accordion: { fontSize: 16 } });

export const RadioButtonGroupStyles = theme =>
  StyleSheet.create({ 'AmountCard Radio Button Group': { marginTop: 10 } });

export const ViewStyles = theme =>
  StyleSheet.create({
    Announcements: { alignItems: 'stretch', paddingLeft: 16, paddingRight: 16 },
    Dashboard: { flex: 1 },
    Details: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    Header: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'Header 2': {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'Header 3': {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'Home buttons': { marginLeft: 16, marginRight: 16 },
    'Name and address': {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 20,
      paddingTop: 20,
    },
    'Navi-App': { flexDirection: 'row', paddingLeft: 16, paddingRight: 16 },
    'Payment Methods': { flexDirection: 'column' },
    'Payment Methods 2': { flexDirection: 'column' },
    Promotions: { alignItems: 'stretch' },
    'Section Header': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
      marginTop: 20,
    },
    Table: {
      backgroundColor: 'rgb(211, 211, 211)',
      borderBottomWidth: 1,
      borderColor: 'rgb(211, 211, 211)',
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'Table 2': {
      backgroundColor: 'rgb(211, 211, 211)',
      borderBottomWidth: 1,
      borderColor: 'rgb(211, 211, 211)',
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    'Table 3': {
      backgroundColor: 'rgb(211, 211, 211)',
      borderBottomWidth: 1,
      borderColor: 'rgb(211, 211, 211)',
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    Tabs: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    VIEW: { alignItems: 'center' },
    View: { alignItems: 'stretch', flex: 1, paddingLeft: 10, paddingRight: 10 },
    View11: { flexDirection: 'row', justifyContent: 'flex-start', opacity: 1 },
    accordion: { borderColor: theme.colors['Divider'] },
    'b-views': { marginLeft: 16, marginRight: 16, marginTop: -120 },
    'botem tab': {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom #ffffff'],
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
    },
    bottom: { flexDirection: 'row', justifyContent: 'space-between' },
    card: { paddingRight: 20 },
    'card 2': {
      backgroundColor: theme.colors['Background'],
      borderRadius: 12,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
    category: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    charts: { flex: 1, paddingLeft: 20, paddingRight: 20 },
    'consumer no': {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    'drawer content': { flex: 1 },
    'drawer content 2': { flex: 1 },
    'fef hed': {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      paddingLeft: 16,
      paddingRight: 16,
    },
    footer: { flexGrow: 0, flexShrink: 0 },
    headerp: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'headerp 2': {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'headerp 3': {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'headerp 4': {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'headerp 5': {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    'map view': {
      alignItems: 'flex-start',
      borderRadius: 0,
      height: 280,
      justifyContent: 'center',
      overflow: 'hidden',
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      width: '100%',
    },
    'nav-checkbox': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    password: {
      alignContent: 'flex-start',
      alignItems: 'center',
      alignSelf: 'auto',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 60,
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    'postpaid view': { alignItems: 'stretch' },
    'postpaid view 2': { alignItems: 'stretch' },
    'postpaid view 3': { alignItems: 'stretch' },
    pr1: {
      alignContent: 'space-between',
      alignItems: 'stretch',
      alignSelf: 'stretch',
      paddingBottom: 8,
      paddingTop: 8,
    },
    preferences: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      opacity: 1,
      width: '100%',
    },
    'preferences 2': {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 8,
      opacity: 1,
      width: '100%',
    },
    'privacy text': { marginTop: 50 },
    profile: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 14,
      paddingTop: 14,
    },
    'search and Add': {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    'section header': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
      marginTop: 25,
      paddingLeft: 20,
      paddingRight: 20,
    },
    'section header 2': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
    },
    'sernumer con': {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingTop: 20,
    },
    sh: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
      marginTop: 25,
      paddingLeft: 20,
      paddingRight: 20,
    },
    'sort op': { flex: 1 },
    'tab view': {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      width: '100%',
    },
    'table 2': {
      alignContent: 'stretch',
      backgroundColor: 'rgb(255, 255, 255)',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: 8,
    },
    tabs: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'tabs 2': { alignItems: 'center', flexDirection: 'row', marginTop: 35 },
    uname: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'user name': {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    'user name 2': {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      opacity: 1,
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    'user name 3': {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 50,
      justifyContent: 'space-between',
      opacity: 1,
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    'view-n': {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingTop: 12,
    },
    viewbilldetails: {
      alignContent: 'flex-start',
      alignItems: 'stretch',
      alignSelf: 'stretch',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
    },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    'B-login and signup': { marginBottom: 8 },
    Submit: {
      fontFamily: 'Roboto_400Regular',
      marginTop: 30,
      paddingLeft: 30,
      paddingRight: 30,
      textAlign: 'center',
    },
    'Submit 2': { fontFamily: 'Roboto_400Regular', textAlign: 'center' },
  });

export const FetchStyles = theme =>
  StyleSheet.create({
    Content: { minHeight: 40 },
    notifications: { minHeight: 40 },
    table: { minHeight: 40 },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { height: 1 } });

export const SurfaceStyles = theme =>
  StyleSheet.create({
    Drawer: {
      backgroundColor: theme.colors.surface,
      position: 'absolute',
      top: 0,
      zIndex: 5,
    },
    'drawer nav': {
      backgroundColor: theme.colors.surface,
      flex: 2,
      height: '100%',
      position: 'absolute',
      top: 0,
      width: '80%',
      zIndex: 5,
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { height: 100, width: 100 },
    banner: { height: 140 },
    'banner 2': { borderRadius: 20, height: 140 },
    'banner 3': { borderRadius: 20, height: 140 },
  });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const PinInputStyles = theme =>
  StyleSheet.create({
    'Pin Input': {
      alignItems: 'center',
      borderColor: theme.colors.medium,
      borderRadius: 5,
      borderWidth: 1,
      color: theme.colors.strong,
      flex: 1,
      fontSize: 25,
      justifyContent: 'center',
      marginLeft: 5,
      marginRight: 5,
      maxHeight: 70,
      maxWidth: 70,
      padding: 5,
    },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({ Swiper: { height: 300 } });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { flex: 1 } });

export const TextStyles = theme => StyleSheet.create({});

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const ScrollViewStyles = theme =>
  StyleSheet.create({ contact: { paddingLeft: 24, paddingRight: 24 } });
