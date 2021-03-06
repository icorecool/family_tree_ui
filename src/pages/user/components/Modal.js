import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader, Select } from 'antd'
import { Trans, withI18n } from '@lingui/react'
import city from 'utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}
@withI18n()
@Form.create()
class UserModal extends PureComponent {
  onRegionChange = (value, selectedOptions) => {
    const { item = {}, form } = this.props
    let [province, city, district] = selectedOptions
    item.province = province.id
    item.city = city.id
    item.district = district.id
  }
  handleOk = () => {
    const { item = {}, onOk, form } = this.props
    const { validateFields, getFieldsValue } = form

    validateFields(errors => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      data.address = data.address.join(' ')
      data.province = item.province
      data.city = item.city
      data.district = item.district
      onOk(data)
    })
  }

  render() {
    const { item = {}, onOk, form, i18n, rolesData, ...modalProps } = this.props
    const { getFieldDecorator } = form

    return (
      <Modal {...modalProps} onOk={this.handleOk}>
        <Form layout="horizontal">
          <Input type="hidden" id="province" value={item.province} />
          <Input type="hidden" id="city" value={item.city} />
          <Input type="hidden" id="district" value={item.district} />
          <FormItem label="用户名" {...formItemLayout}>
            {getFieldDecorator('username', {
              initialValue: item.username,
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label="真实姓名" {...formItemLayout}>
            {getFieldDecorator('realName', {
              initialValue: item.realName,
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label="性别" {...formItemLayout}>
            {getFieldDecorator('gender', {
              initialValue: item.gender,
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Radio.Group>
                <Radio value={'男'}>男</Radio>
                <Radio value={'女'}>女</Radio>
                <Radio value={'不清楚'}>不清楚</Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem label="年龄" {...formItemLayout}>
            {getFieldDecorator('age', {
              initialValue: item.age,
              rules: [
                {
                  required: true,
                  type: 'number',
                },
              ],
            })(<InputNumber min={1} max={150} />)}
          </FormItem>
          <FormItem label="手机" {...formItemLayout}>
            {getFieldDecorator('mobile', {
              initialValue: item.mobile,
              rules: [
                {
                  required: true,
                  pattern: /^1[34578]\d{9}$/,
                  message: '无效的手机号码',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label="邮箱" {...formItemLayout}>
            {getFieldDecorator('email', {
              initialValue: item.email,
              rules: [
                {
                  required: true,
                  pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                  message: '无效的邮箱',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label="住址" {...formItemLayout}>
            {getFieldDecorator('address', {
              initialValue: item.address && item.address.split(' '),
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Cascader
                style={{ width: '100%' }}
                options={city}
                placeholder="选择住址"
                onChange={this.onRegionChange}
              />
            )}
          </FormItem>
          <FormItem label="类型" {...formItemLayout}>
            {getFieldDecorator('type', {
              initialValue: item.type == null ? '普通用户' : item.type,
              rules: [
                {
                  required: true,
                },
              ],
            })(
              <Radio.Group>
                <Radio value={'管理员'}>管理员</Radio>
                <Radio value={'普通用户'}>普通用户</Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem label="启用" {...formItemLayout}>
            {getFieldDecorator('valid', {
              initialValue: item.valid == null ? '是' : item.valid,
              rules: [
                {
                  required: false,
                },
              ],
            })(
              <Radio.Group>
                <Radio value={'是'}>是</Radio>
                <Radio value={'否'}>否</Radio>
              </Radio.Group>
            )}
          </FormItem>
          <FormItem label="分配角色" {...formItemLayout}>
            {getFieldDecorator('roles', {
              initialValue: item.roles,
              rules: [
                {
                  required: false,
                },
              ],
            })(
              <Select
                mode="multiple"
                labelInValue={false}
                placeholder="请选择"
                style={{ width: '100%' }}
              >
                {rolesData.map(d => (
                  <Option key={d.id}>{d.name}</Option>
                ))}
              </Select>
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default UserModal
