import React from 'react';
import { Dayjs } from 'dayjs';
import { GanttContext } from './context';
import { DefaultRecordType, Gantt } from './types';
import './Gantt.less';
export interface GanttProps<RecordType = DefaultRecordType> {
    data: Gantt.Record<RecordType>[];
    columns: Gantt.Column[];
    dependencies?: Gantt.Dependence[];
    onUpdate: (record: Gantt.Record<RecordType>, startDate: string, endDate: string) => Promise<boolean>;
    startDateKey?: string;
    endDateKey?: string;
    themeColor: string;
    isRestDay?: (date: string) => boolean;
    unit?: Gantt.Sight;
    rowHeight?: number;
    innerRef?: React.MutableRefObject<GanttRef>;
    getBarColor?: GanttContext<RecordType>['getBarColor'];
    showBackToday?: GanttContext<RecordType>['showBackToday'];
    showUnitSwitch?: GanttContext<RecordType>['showUnitSwitch'];
    onRow?: GanttContext<RecordType>['onRow'];
    tableIndent?: GanttContext<RecordType>['tableIndent'];
    expandIcon?: GanttContext<RecordType>['expandIcon'];
    renderBar?: GanttContext<RecordType>['renderBar'];
    renderGroupBar?: GanttContext<RecordType>['renderGroupBar'];
    renderInvalidBar?: GanttContext<RecordType>['renderInvalidBar'];
    renderBarThumb?: GanttContext<RecordType>['renderBarThumb'];
    onBarClick?: GanttContext<RecordType>['onBarClick'];
    tableCollapseAble?: GanttContext<RecordType>['tableCollapseAble'];
    scrollTop?: GanttContext<RecordType>['scrollTop'];
    disabled?: boolean;
    alwaysShowTaskBar?: boolean;
    renderLeftText?: GanttContext<RecordType>['renderLeftText'];
    renderRightText?: GanttContext<RecordType>['renderLeftText'];
    onExpand?: GanttContext<RecordType>['onExpand'];
}
export interface GanttRef {
    backToday: () => void;
    getWidthByDate: (startDate: Dayjs, endDate: Dayjs) => number;
}
declare const GanttComponent: <RecordType extends DefaultRecordType>(props: GanttProps<RecordType>) => JSX.Element;
export default GanttComponent;
