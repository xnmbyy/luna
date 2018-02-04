/**
 * app 模块
 *
 *
 * @date     2017-11-07
 * @author   liuzheng <liuzheng712@gmail.com>
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import {LoggerModule, NGXLogger, NgxLoggerLevel} from 'ngx-logger';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// service
import {AppService, HttpService, LogService, UUIDService} from './app.service';
import {DialogService} from './elements/dialog/dialog.service';

// Elements
import {ElementFooterComponent} from './elements/footer/footer.component';
import {ElementTermComponent} from './elements/term/term.component';
import {ElementInteractiveComponent} from './elements/interactive/interactive.component';
import {ElementNavComponent} from './elements/nav/nav.component';
import {ElementPopupComponent} from './elements/popup/popup.component';
import {ElementRdpComponent} from './elements/rdp/rdp.component';
import {ElementServerMenuComponent} from './elements/server-menu/server-menu.component';
import {ElementIframeComponent} from './elements/iframe/iframe.component';
// pages
import {LoginComponent} from './BasicPage/login/login.component';
import {IleftbarComponent} from './IndexPage/ileftbar/ileftbar.component';
import {SearchComponent, SearchFilter} from './ControlPage/search/search.component';
import {CleftbarComponent, CleftbarComponentDialog} from './ControlPage/cleftbar/cleftbar.component';
import {ControlComponent} from './ControlPage/control/control.component';
import {ControlnavComponent} from './ControlPage/control/controlnav/controlnav.component';
import {ControlPageComponent} from './ControlPage/controlpage.component';
import {IndexPageComponent} from './IndexPage/index-page.component';
import {NotFoundComponent} from './BasicPage/not-found/not-found.component';
import {RdpPageComponent} from './rdp-page/rdp-page.component';
import {TermPageComponent} from './term-page/term-page.component';
import {ReplayPageComponent} from './replay-page/replay-page.component';
import {Mp4Component} from './replay-page/mp4/mp4.component';
import {JsonComponent} from './replay-page/json/json.component';
import {UtcDatePipe} from './app.pipe';
import {MonitorPageComponent} from './monitor-page/monitor-page.component';
import {LinuxComponent} from './monitor-page/linux/linux.component';
import {WindowsComponent} from './monitor-page/windows/windows.component';
import {NgProgressModule} from 'ngx-progressbar';
import {TestPageComponent, TestPageComponentDialog} from './test-page/test-page.component';
import {BlankPageComponent} from './blank-page/blank-page.component';
import {MaterialModule} from './MaterialModule.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgProgressModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
    // NgxLayerModule
  ],
  declarations: [
    AppComponent,
    ElementNavComponent,
    ElementFooterComponent,
    ElementPopupComponent,
    ElementTermComponent,
    ElementInteractiveComponent,
    ElementRdpComponent,
    ElementServerMenuComponent,
    ElementIframeComponent,
    LoginComponent,
    SearchComponent,
    SearchFilter,
    IleftbarComponent,
    CleftbarComponent, CleftbarComponentDialog,
    ControlComponent,
    ControlnavComponent,
    ControlPageComponent,
    IndexPageComponent,
    NotFoundComponent,
    RdpPageComponent,
    TermPageComponent,
    ReplayPageComponent,
    Mp4Component,
    JsonComponent,
    UtcDatePipe,
    MonitorPageComponent,
    LinuxComponent,
    WindowsComponent,
    TestPageComponent, TestPageComponentDialog,
    BlankPageComponent,
  ],
  entryComponents: [
    CleftbarComponentDialog,
    TestPageComponentDialog
  ],
  bootstrap: [AppComponent],
  providers: [
    // {provide: LoggerConfig, useValue: {level: LoggerLevel.WARN}},
    // {provide: BrowserXhr, useClass: NgProgressBrowserXhr},
    AppService,
    HttpService,
    LogService,
    UUIDService,
    DialogService,
    NGXLogger
  ]
})
export class AppModule {
}
