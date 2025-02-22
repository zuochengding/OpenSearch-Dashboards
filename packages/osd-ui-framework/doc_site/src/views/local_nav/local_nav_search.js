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

import { KuiLocalNav, KuiLocalNavRow, KuiLocalNavRowSection } from '../../../../components';

export function LocalNavWithSearch() {
  return (
    <KuiLocalNav>
      <KuiLocalNavRow>
        <KuiLocalNavRowSection>
          <div className="kuiLocalBreadcrumbs">
            <h1 tabIndex="0" id="kui_local_breadcrumb" className="kuiLocalBreadcrumb">
              <a className="kuiLocalBreadcrumb__link" href="#">
                Discover
              </a>
            </h1>
            <h1 tabIndex="0" id="kui_local_breadcrumb" className="kuiLocalBreadcrumb">
              <span className="kuiLocalBreadcrumb__emphasis">0</span> hits
            </h1>
          </div>
        </KuiLocalNavRowSection>
        <KuiLocalNavRowSection>
          <div className="kuiLocalMenu">
            <button className="kuiLocalMenuItem">New</button>
            <button className="kuiLocalMenuItem">Save</button>
            <button className="kuiLocalMenuItem">Open</button>
            <button className="kuiLocalMenuItem">
              <div className="kuiLocalMenuItem__icon kuiIcon fa-clock-o" />
              Last 5 minutes
            </button>
          </div>
        </KuiLocalNavRowSection>
      </KuiLocalNavRow>
      <KuiLocalNavRow isSecondary>
        <div className="kuiLocalSearch">
          <div className="kuiLocalSearchAssistedInput">
            <input
              style={{ paddingRight: '5.5em' }}
              className="kuiLocalSearchInput"
              type="text"
              placeholder="Filter..."
              autoComplete="off"
            />
            <div className="kuiLocalSearchAssistedInput__assistance">
              <p className="kuiText">
                <a className="kuiLink" href="#">
                  API docs
                </a>
              </p>
            </div>
          </div>

          <input
            className="kuiLocalSearchInput kuiLocalSearchInput--secondary"
            type="text"
            placeholder="Another input"
            autoComplete="off"
            style={{ width: 150 }}
          />

          <select className="kuiLocalSearchSelect">
            <option>Alligator</option>
            <option>Balaclava</option>
            <option>Castanets</option>
          </select>

          <button className="kuiLocalSearchButton">
            <span className="kuiIcon fa-search" />
          </button>
        </div>
      </KuiLocalNavRow>
    </KuiLocalNav>
  );
}
