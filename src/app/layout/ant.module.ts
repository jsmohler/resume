import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd';

const antModules = [
  NzButtonModule,
  NzTypographyModule,
  NzGridModule,
  NzLayoutModule,
  NzDropDownModule,
  NzMenuModule,
  NzPageHeaderModule,
  NzAvatarModule,
  NzCardModule,
  NzListModule,
  NzAffixModule,
  NzDividerModule,
  NzRateModule,
  NzTimelineModule,
  NzTableModule,
  NzTagModule,
  NzIconModule,
];

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [],
  imports: [...antModules],
  exports: [...antModules],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class AntModule {}
