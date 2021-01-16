import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotdetailsPage } from './botdetails.page';

const routes: Routes = [
  {
    path: '',
    component: BotdetailsPage
  },
  {
    path: 'support-agents',
    loadChildren: () => import('./support-agents/support-agents.module').then( m => m.SupportAgentsPageModule)
  },
  {
    path: 'android-script',
    loadChildren: () => import('./android-script/android-script.module').then( m => m.AndroidScriptPageModule)
  },
  {
    path: 'ios-script',
    loadChildren: () => import('./ios-script/ios-script.module').then( m => m.IosScriptPageModule)
  },
  {
    path: 'web-script',
    loadChildren: () => import('./web-script/web-script.module').then( m => m.WebScriptPageModule)
  },
  {
    path: '',
    component: BotdetailsPage,
    children: [
  //     {
  //       path: 'android-script',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../botdetails/android-script/android-script.module#AndroidScriptPageModule'
  //           // loadChildren: () => import('./android-script/android-script.module').then( m => m.AndroidScriptPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'ios-script',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../botdetails/ios-script/ios-script.module#IosScriptPageModule'
  //           // loadChildren: () => import('./ios-script/ios-script.module').then( m => m.IosScriptPageModule)
  //         }
  //       ]

  //     },
  //     {
  //       path: 'web-script',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: '../botdetails/web-script/web-script.module#WebScriptPageModule'
  //           // loadChildren: () => import('./web-script/web-script.module').then( m => m.WebScriptPageModule)
  //         }
  //       ]

  //     },
      {
        path: 'analytics',
        children: [
          {
            path: '',
            loadChildren: '../botdetails/analytics/analytics.module#AnalyticsPageModule'
            // loadChildren: () => import('./web-script/web-script.module').then( m => m.WebScriptPageModule)
          }
        ]

      },
      {
        path: 'sendemail',
        children: [
          {
            path: '',
            loadChildren: '../botdetails/sendemail/sendemail.module#SendemailPageModule'
            // loadChildren: () => import('./web-script/web-script.module').then( m => m.WebScriptPageModule)
          }
        ]

      },
      {
        path: 'addagent',
        children: [
          {
            path: '',
            loadChildren: '../botdetails/addagent/addagent.module#AddagentPageModule'
            // loadChildren: () => import('./web-script/web-script.module').then( m => m.WebScriptPageModule)
          }
        ]

      },
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: '../botdetails/analytics/analytics.module#AnalyticsPageModule'
            // loadChildren: () => import('./web-script/web-script.module').then( m => m.WebScriptPageModule)
          }
        ]

      },
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: '../botdetails/android-script/android-script.module#AndroidScriptPageModule',
            pathMatch: 'full'
            // loadChildren: () => import('./web-script/web-script.module').then( m => m.WebScriptPageModule)
          }
        ]

      },
      {
        path: '',
        redirectTo: '/botdetails/android-script',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/botdetails/analytics',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: 'analytics',
  //   loadChildren: () => import('./analytics/analytics.module').then( m => m.AnalyticsPageModule)
  // },
  // {
  //   path: 'addagent',
  //   loadChildren: () => import('./addagent/addagent.module').then( m => m.AddagentPageModule)
  // },
  // {
  //   path: 'sendemail',
  //   loadChildren: () => import('./sendemail/sendemail.module').then( m => m.SendemailPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotdetailsPageRoutingModule {}
