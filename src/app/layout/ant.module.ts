import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopoverModule } from 'ng-zorro-antd';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { NzDividerModule } from 'ng-zorro-antd/divider';

const antModules = [
  NzPopoverModule,
  NzButtonModule,
  NzIconModule,
  NzTypographyModule,
  NzGridModule,
  NzLayoutModule,
  NzDropDownModule,
  NzMenuModule,
  NzPageHeaderModule,
  NzStepsModule,
  NzSelectModule,
  NzAvatarModule,
  NzBadgeModule,
  NzCardModule,
  NzCollapseModule,
  NzDescriptionsModule,
  NzEmptyModule,
  NzListModule,
  NzTabsModule,
  NzTagModule,
  NzDrawerModule,
  NzModalModule,
  NzSkeletonModule,
  NzSpinModule,

  NzDividerModule,
];

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [],
  imports: [CommonModule, ...antModules],
  exports: [...antModules],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AntModule {}
