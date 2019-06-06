import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppFooter} from './AppFooter';
import {AppMenu} from './AppMenu';
import {AppInlineProfile} from './AppInlineProfile';
import {Route} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {FormsDemo} from './components/FormsDemo';
import {SampleDemo} from './components/SampleDemo';
import {DataDemo} from './components/DataDemo';
import {PanelsDemo} from './components/PanelsDemo';
import {OverlaysDemo} from './components/OverlaysDemo';
import {MenusDemo} from './components/MenusDemo';
import {MessagesDemo} from './components/MessagesDemo';
import {ChartsDemo} from './components/ChartsDemo';
import {MiscDemo} from './components/MiscDemo';
import {EmptyPage} from './components/EmptyPage';
import {Login} from './components/login/login';
import {Documentation} from "./components/Documentation";
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import './App.css';
import {SearchCard} from "./components/search-card/search-card";
import {CreateCard} from "./components/create-card/create-card";
import {CardList} from "./components/card-list/card-list";
import {OperatorManagement} from "./components/operator-management/operator-management";
import {PriceManagement} from "./components/price-management/price-management";
import {Settings, TechnicalVisit} from "./components/technical-visit-management/technical-visit-management";
import {ExpertManagement} from "./components/expert-management/expert-management";
import {StationManagement} from "./components/station-management/station-management";
import {AgentManagement} from "./components/agent-management/agent-management";
import {ChainManagement} from "./components/chain-management/chain-management";
import {StampSignature} from "./components/stamp-signature-management/stamp-signature-management";
import {OrderBlanks} from "./components/order-blanks/order-blanks";
import {BlockingAgents} from "./components/blocking-agents/blocking-agents";
import {Reports} from "./components/reports/reports";

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.openSettings = this.openSettings.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }
       
        event.preventDefault();
    }

    openSettings(){
      window.location = '#/technical-visit-management'
    }

    onSidebarClick(event) {
        this.menuClick = true;
        setTimeout(() => {this.layoutMenuScroller.moveBar(); }, 500);
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Главная', icon: 'pi pi-fw pi-home', command: () => {window.location = '#/'}},

            {
                label: 'Блок управления', icon: 'pi pi-fw pi-ellipsis-v',
                items: [
                    {
                        label: 'Управление оперторами', icon: 'pi pi-fw pi-ellipsis-h', command: () => {window.location = '#/operator-management'}
                    },
                    {
                        label: 'Управление экпертами', icon: 'pi pi-fw pi-ellipsis-h', command: () => {window.location = '#/expert-management'}
                    },
                    {
                        label: 'Управление станциями', icon: 'pi pi-fw pi-ellipsis-h', command: () => {window.location = '#/station-management'}
                    },
                    {
                        label: 'Управление агентами', icon: 'pi pi-fw pi-ellipsis-h', command: () => {window.location = '#/agent-management'}
                    },
                    {
                        label: 'Управление записями', icon: 'pi pi-fw pi-ellipsis-h', command: () => {window.location = '#/technical-visit-management'}
                    },
                    {
                        label: 'Управление печатями', icon: 'pi pi-fw pi-ellipsis-h', command: () => {window.location = '#/stamp-signature-management'}
                    },
                    {
                        label: 'Управление цепями', icon: 'pi pi-fw pi-ellipsis-h', command: () => {window.location = '#/chain-management'}
                    }
                ]
            },
            {label: 'Заказ бланков', icon: 'pi pi-fw pi-cog', command: () => {window.location = '#/order-blanks'}},
            {label: 'Блокировка агентов', icon: 'pi pi-fw pi-angle-double-down',command: () => {window.location = '#/blocking-agents'}},
            {
                label: 'Отчеты', icon: 'pi pi-fw pi-cloud-download', command: () => {window.location = '#/reports'}
            },
            {
                label: 'Поиск ДК', icon: 'pi pi-fw pi-search', command: () => {window.location = '#/search-card'}
            },
            {
                label: 'Список ДК', icon: 'pi pi-fw pi-align-left', command: () => {window.location = "#/card-list"}
            },
            {label: 'Login', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/login"}},
            {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sigma"}}
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {
        let logo = this.state.layoutColorMode === 'dark' ? 'assets/layout/images/logo-white.svg': 'assets/layout/images/logo.svg';

        let wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });
        let sidebarClassName = classNames("layout-sidebar", {'layout-sidebar-dark': this.state.layoutColorMode === 'dark'});

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu} openSettings={this.openSettings}/>

                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>

                    <ScrollPanel ref={(el) => this.layoutMenuScroller = el} style={{height:'100%'}}>
                        <div className="layout-sidebar-scroll-content" >
                            <div className="layout-logo">
                                <img alt="Logo" src={logo} />
                            </div>
                            <AppInlineProfile />
                            <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                        </div>
                    </ScrollPanel>
                </div>

                <div className="layout-main">
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/search-card" exact component={SearchCard} />
                    <Route path="/create-card" exact component={CreateCard} />
                    <Route path="/card-list" exact component={CardList} />
                    <Route path="/forms" component={FormsDemo} />
                    <Route path="/sample" component={SampleDemo} />
                    <Route path="/data" component={DataDemo} />
                    <Route path="/panels" component={PanelsDemo} />
                    <Route path="/overlays" component={OverlaysDemo} />
                    <Route path="/menus" component={MenusDemo} />
                    <Route path="/messages" component={MessagesDemo} />
                    <Route path="/charts" component={ChartsDemo} />
                    <Route path="/misc" component={MiscDemo} />
                    <Route path="/empty" component={EmptyPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/technical-visit-management" component={TechnicalVisit} />
                    <Route path="/stamp-signature-management" component={StampSignature} />
                    <Route path="/order-blanks" component={OrderBlanks} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/blocking-agents" component={BlockingAgents} />
                    <Route path="/operator-management" component={OperatorManagement} />
                    <Route path="/expert-management" component={ExpertManagement} />
                    <Route path="/station-management" component={StationManagement} />
                    <Route path="/agent-management" component={AgentManagement} />
                    <Route path="/chain-management" component={ChainManagement} />
                    <Route path="/price-management" component={PriceManagement} />
                    <Route path="/documentation" component={Documentation} />
                </div>

                <AppFooter />

                <div className="layout-mask"></div>
            </div>
        );
    }
}

export default App;
