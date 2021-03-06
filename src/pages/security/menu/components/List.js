import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Button } from 'antd'
import { Trans, withI18n } from '@lingui/react'
import styles from './List.less'
import { isAllowed } from '../../../auth'

const { confirm } = Modal

@withI18n()
class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem, i18n } = this.props

    if (e === '1') {
      onEditItem(record)
    } else if (e === '2') {
      confirm({
        title: '你确定要删除这条记录吗？',
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, i18n, ...tableProps } = this.props

    const columns = [
      {
        title: '菜单编码',
        dataIndex: 'code',
        key: 'code',
        width: 120,
      },
      {
        title: '菜单名称',
        dataIndex: 'name',
        key: 'name',
        width: 120,
      },
      {
        title: '目录',
        dataIndex: 'parentMenuName',
        key: 'parentMenuName',
        width: 120,
      },
      {
        title: '图标',
        dataIndex: 'icon',
        key: 'icon',
        width: 120,
      },
      {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
        width: 120,
      },
      {
        title: '路径',
        dataIndex: 'url',
        key: 'url',
        width: 120,
      },
      {
        title: '备注',
        dataIndex: 'remark',
        key: 'remark',
        width: 120,
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        width: 120,
      },
      {
        title: '启用',
        dataIndex: 'valid',
        key: 'valid',
        width: 120,
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        render: (text, record) => {
          return (
            <Button.Group>
              {isAllowed('menu.update') && (
                <Button
                  icon="edit"
                  onClick={e => this.handleMenuClick(record, '1')}
                  size={'small'}
                >
                  修改
                </Button>
              )}
              {isAllowed('menu.delete') && (
                <Button
                  icon="delete"
                  onClick={e => this.handleMenuClick(record, '2')}
                  size={'small'}
                >
                  删除
                </Button>
              )}
            </Button.Group>
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => i18n.t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
