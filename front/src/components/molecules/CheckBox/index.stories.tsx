import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CheckBox from './index'
import Box from 'components/layout/Box'

export default {
	title: 'Molecules/CheckBox',
	argTypes: {
		label: {
			control: {
				type: 'text',
			},
			description: 'ラベル',
			table: {
				type: { summary: 'text' },
			},
		},

		checked: {
			control: {
				type: 'boolean',
			},
			description: 'チェック',
			table: {
				type: {
					summary: 'boolean',
				},
			},
		},

		onChange: {
			description: '値が変化したときのイベントハンドラ',
			table: {
				type: {
					summary: 'function',
				},
			},
		},
	},
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />

export const WithLabel = Template.bind({})
WithLabel.args = { label: 'Label' }
