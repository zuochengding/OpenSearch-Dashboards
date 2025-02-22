/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';

import { GuideDemo, GuidePage, GuideSection, GuideSectionTypes } from '../../components';

import html from './status_text.html';
import infoHtml from './status_text_info.html';
import successHtml from './status_text_success.html';
import warningHtml from './status_text_warning.html';
import errorHtml from './status_text_error.html';

export default (props) => (
  <GuidePage title={props.route.name}>
    <GuideSection
      title="StatusText"
      source={[
        {
          type: GuideSectionTypes.HTML,
          code: html,
        },
      ]}
    >
      <GuideDemo html={html} />
    </GuideSection>

    <GuideSection
      title="Info"
      source={[
        {
          type: GuideSectionTypes.HTML,
          code: infoHtml,
        },
      ]}
    >
      <GuideDemo html={infoHtml} />
    </GuideSection>

    <GuideSection
      title="Success"
      source={[
        {
          type: GuideSectionTypes.HTML,
          code: successHtml,
        },
      ]}
    >
      <GuideDemo html={successHtml} />
    </GuideSection>

    <GuideSection
      title="Warning"
      source={[
        {
          type: GuideSectionTypes.HTML,
          code: warningHtml,
        },
      ]}
    >
      <GuideDemo html={warningHtml} />
    </GuideSection>

    <GuideSection
      title="Error"
      source={[
        {
          type: GuideSectionTypes.HTML,
          code: errorHtml,
        },
      ]}
    >
      <GuideDemo html={errorHtml} />
    </GuideSection>
  </GuidePage>
);
