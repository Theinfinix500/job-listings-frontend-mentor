import { JobCardComponent } from './job-card.component';
import { Meta, Story } from '@storybook/angular';

export default {
  title: 'Components/Job-card',
  component: JobCardComponent,
} as Meta;

const Template: Story<JobCardComponent> = (args: JobCardComponent) => ({
  props: args,
});

export const Desktop = Template.bind({});
Desktop.args = {};
