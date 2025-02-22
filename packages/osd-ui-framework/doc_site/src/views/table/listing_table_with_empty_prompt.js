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

import {
  KuiButton,
  KuiButtonIcon,
  KuiPager,
  KuiEmptyTablePrompt,
  KuiEmptyTablePromptPanel,
  KuiListingTable,
  KuiTableHeaderCell,
} from '../../../../components';

function renderEmptyTablePrompt() {
  return (
    <KuiEmptyTablePromptPanel>
      <KuiEmptyTablePrompt
        actions={<KuiButton buttonType="primary">Add Items</KuiButton>}
        message="Uh oh you have no items!"
      />
    </KuiEmptyTablePromptPanel>
  );
}

function renderToolBarActions() {
  return [
    <KuiButton key="add" buttonType="primary" aria-label="Add">
      Add
    </KuiButton>,
    <KuiButton
      key="settings"
      aria-label="Settings"
      buttonType="basic"
      icon={<KuiButtonIcon type="settings" />}
    />,
    <KuiButton
      key="menu"
      aria-label="Menu"
      buttonType="basic"
      icon={<KuiButtonIcon type="menu" />}
    />,
  ];
}

function renderPager() {
  return (
    <KuiPager
      startNumber={1}
      hasNextPage={true}
      hasPreviousPage={false}
      endNumber={10}
      totalItems={100}
      onNextPage={() => {}}
      onPreviousPage={() => {}}
    />
  );
}

function renderHeader() {
  return [
    <KuiTableHeaderCell key="title">Title</KuiTableHeaderCell>,
    <KuiTableHeaderCell key="status">Status</KuiTableHeaderCell>,
    <KuiTableHeaderCell key="created">Date created</KuiTableHeaderCell>,
    <KuiTableHeaderCell key="order" className="kuiTableHeaderCell--alignRight">
      Orders of magnitude
    </KuiTableHeaderCell>,
  ];
}

export function ListingTableWithEmptyPrompt() {
  return (
    <KuiListingTable
      pager={renderPager()}
      toolBarActions={renderToolBarActions()}
      header={renderHeader()}
      onFilter={() => {}}
      filter=""
      prompt={renderEmptyTablePrompt()}
      onItemSelectionChanged={() => {}}
    />
  );
}
