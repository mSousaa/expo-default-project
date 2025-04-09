import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Briefcase, Users, BarChart2, FileText, Settings, LogOut } from 'lucide-react';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: '/api/placeholder/50/50' }}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>GestorPro</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Bem-vindo, Admin</Text>
          <Image
            source={{ uri: '/api/placeholder/40/40' }}
            style={styles.userAvatar}
          />
        </View>
      </View>
      
      <View style={styles.mainContainer}>
        {/* Sidebar - Movido para a direita */}
        <ScrollView style={styles.content}>
          <Text style={styles.contentTitle}>Visão Geral</Text>
          
          {/* Atividades Recentes - Movido para cima */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Atividades Recentes</Text>
            <View style={styles.activityList}>
              {[1, 2, 3, 4].map((item) => (
                <View key={item} style={styles.activityItem}>
                  <View style={[styles.activityDot, { backgroundColor: item % 2 === 0 ? '#8e44ad' : '#27ae60' }]} />
                  <View style={styles.activityInfo}>
                    <Text style={styles.activityTitle}>
                      {item % 2 === 0 ? 'Novo cliente adicionado' : 'Projeto atualizado'}
                    </Text>
                    <Text style={styles.activityTime}>
                      {`Há ${item} hora${item > 1 ? 's' : ''}`}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
          
          {/* Cards Principais - Layout modificado para 2x2 */}
          <View style={styles.cardGrid}>
            <View style={styles.cardRow}>
              <View style={[styles.card, {backgroundColor: '#8e44ad'}]}>
                <Text style={styles.cardValue}>350</Text>
                <Text style={styles.cardLabel}>Clientes</Text>
              </View>
              
              <View style={[styles.card, {backgroundColor: '#27ae60'}]}>
                <Text style={styles.cardValue}>124</Text>
                <Text style={styles.cardLabel}>Projetos Ativos</Text>
              </View>
            </View>
            
            <View style={styles.cardRow}>
              <View style={[styles.card, {backgroundColor: '#e74c3c'}]}>
                <Text style={styles.cardValue}>35</Text>
                <Text style={styles.cardLabel}>Pendências</Text>
              </View>
              
              <View style={[styles.card, {backgroundColor: '#f1c40f'}]}>
                <Text style={styles.cardValue}>R$ 157k</Text>
                <Text style={styles.cardLabel}>Receita Mensal</Text>
              </View>
            </View>
          </View>
          
          {/* Seção Projetos Recentes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projetos Recentes</Text>
            <View style={styles.projectList}>
              {[1, 2, 3].map((item) => (
                <View key={item} style={styles.projectItem}>
                  <View style={styles.projectHeader}>
                    <Text style={styles.projectTitle}>Projeto {item}</Text>
                    <View style={[styles.projectStatus, { backgroundColor: item === 3 ? '#f1c40f' : '#27ae60' }]}>
                      <Text style={styles.projectStatusText}>{item === 3 ? 'Em andamento' : 'Concluído'}</Text>
                    </View>
                  </View>
                  <Text style={styles.projectDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <View style={styles.menuItems}>
            <TouchableOpacity style={[styles.menuItem, styles.activeMenuItem]}>
              <BarChart2 color="#fff" size={20} />
              <Text style={[styles.menuText, styles.activeMenuText]}>Dashboard</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Briefcase color="#e0e0e0" size={20} />
              <Text style={styles.menuText}>Projetos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Users color="#e0e0e0" size={20} />
              <Text style={styles.menuText}>Clientes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <FileText color="#e0e0e0" size={20} />
              <Text style={styles.menuText}>Relatórios</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Settings color="#e0e0e0" size={20} />
              <Text style={styles.menuText}>Configurações</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <LogOut color="#e0e0e0" size={20} />
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    backgroundColor: '#34495e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c3e50',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 220,
    backgroundColor: '#34495e',
    padding: 15,
    justifyContent: 'space-between',
    borderLeftWidth: 1,
    borderLeftColor: '#2c3e50',
  },
  menuItems: {
    flex: 1,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 8,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  activeMenuItem: {
    backgroundColor: '#8e44ad',
  },
  menuText: {
    marginLeft: 12,
    color: '#e0e0e0',
    fontSize: 16,
  },
  activeMenuText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#2c3e50',
    paddingTop: 20,
  },
  logoutText: {
    marginLeft: 12,
    color: '#e0e0e0',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardGrid: {
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 14,
    color: '#fff',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  projectList: {
    marginTop: 10,
  },
  projectItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#8e44ad',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  projectDesc: {
    fontSize: 14,
    color: '#777',
  },
  projectStatus: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  projectStatusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  activityList: {
    marginTop: 10,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  activityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 15,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  activityTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },
});

export default Dashboard;