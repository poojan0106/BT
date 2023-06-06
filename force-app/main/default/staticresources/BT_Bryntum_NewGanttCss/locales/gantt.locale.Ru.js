/*!
 *
 * Bryntum Gantt 5.3.6
 *
 * Copyright(c) 2023 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
(function(i,r){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],r);else if(typeof module=="object"&&module.exports)module.exports=r();else{var d=r(),u=s?exports:i;for(var p in d)u[p]=d[p]}})(typeof self<"u"?self:void 0,()=>{var i={},r={exports:i},s=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,p=Object.prototype.hasOwnProperty,g=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t)s(e,a,{get:t[a],enumerable:!0})},b=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of u(t))!p.call(e,o)&&o!==a&&s(e,o,{get:()=>t[o],enumerable:!(n=d(t,o))||n.enumerable});return e},v=e=>b(s({},"__esModule",{value:!0}),e),h=(e,t,a)=>(g(e,typeof t!="symbol"?t+"":t,a),a),m={};y(m,{default:()=>k}),r.exports=v(m);var c=class{static mergeLocales(...e){let t={};return e.forEach(a=>{Object.keys(a).forEach(n=>{typeof a[n]=="object"?t[n]={...t[n],...a[n]}:t[n]=a[n]})}),t}static trimLocale(e,t){let a=(n,o)=>{e[n]&&(o?e[n][o]&&delete e[n][o]:delete e[n])};Object.keys(t).forEach(n=>{Object.keys(t[n]).length>0?Object.keys(t[n]).forEach(o=>a(n,o)):a(n)})}static normalizeLocale(e,t){if(!e)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof e=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=e||t.name:t.localeName=e}else t=e;let a={};if(t.name||t.locale)a=Object.assign({localeName:t.name},t.locale),t.desc&&(a.localeDesc=t.desc),t.code&&(a.localeCode=t.code),t.path&&(a.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);a=Object.assign({},t)}for(let n of["name","desc","code","path"])a[n]&&delete a[n];if(!a.localeName)throw new Error("Locale name can not be empty");return a}static get locales(){return globalThis.bryntum.locales||{}}static set locales(e){globalThis.bryntum.locales=e}static get localeName(){return globalThis.bryntum.locale||"En"}static set localeName(e){globalThis.bryntum.locale=e||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(e,t){let{locales:a}=globalThis.bryntum,n=c.normalizeLocale(e,t),{localeName:o}=n;return!a[o]||t===!0?a[o]=n:a[o]=this.mergeLocales(a[o]||{},n||{}),a[o]}},l=c;h(l,"skipLocaleIntegrityCheck",!1),globalThis.bryntum=globalThis.bryntum||{},globalThis.bryntum.locales=globalThis.bryntum.locales||{},l._$name="LocaleHelper";var D={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Удалить зависимость"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Деактивировать зависимость"},CycleEffectDescription:{descriptionTpl:"Обнаружены циклические данные. Цикл образуют следующие задачи: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'Календарь "{0}" не содержит ни одного интервала рабочего времени.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Использовать 24-часовой календарь с выходными субботой и воскресеньем."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Использовать 8-часовой календарь (08:00-12:00, 13:00-17:00) с выходными субботой и воскресеньем."},ConflictEffectDescription:{descriptionTpl:"Обнаружен конфликт планирования: {0} конфликтует с {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Начало проекта {0}",endDateDescriptionTpl:"Окончание проекта {0}"},DependencyType:{long:["Начало-Начало","Начало-Окончание","Окончание-Начало","Окончание-Окончание"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'"{2}" запланирована вручную и предписывает подзадачам начать не раньше {0}',endDescriptionTpl:'"{2}" запланирована вручную и предписывает подзадачам закончить не позднее {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Отключить ручное планирование задачи "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Зависимость ({2}) от "{3}" к "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Удалить зависимость от "{1}" к "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Деактивировать зависимость от "{1}" к "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Ограничение {3} {0} задачи "{2}"',endDateDescriptionTpl:'Ограничение {3} {1} задачи "{2}"',constraintTypeTpl:{startnoearlierthan:"Начало-не-раньше",finishnoearlierthan:"Окончание-не-раньше",muststarton:"Фиксированное-начало",mustfinishon:"Фиксированное-окончание",startnolaterthan:"Начало-не-позднее",finishnolaterthan:"Окончание-не-позднее"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Удалить ограничение "{1}" с задачи "{0}"'}},N=l.publishLocale(D),C={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",Object:{Yes:"Да",No:"Нет",Cancel:"Отмена",Ok:"OK",Week:"Неделя"},Combo:{noResults:"Нет результатов",recordNotCommitted:"Запись не может быть добавлена",addNewValue:e=>`добавить ${e}`},FilePicker:{file:"Файл"},Field:{badInput:"Недопустимое значение поля",patternMismatch:"Значение должно соответствовать определенному шаблону",rangeOverflow:e=>`Значение должно быть меньше или равно ${e.max}`,rangeUnderflow:e=>`Значение должно быть больше или равно ${e.min}`,stepMismatch:"Значение должно соответствовать шагу",tooLong:"Значение должно быть короче",tooShort:"Значение должно быть длиннее",typeMismatch:"Значение должно быть в специальном формате",valueMissing:"Поле не может быть пустым",invalidValue:"Недопустимое значение поля",minimumValueViolation:"Нарушение минимального значения",maximumValueViolation:"Нарушение максимального значения",fieldRequired:"Поле не может быть пустым",validateFilter:"Выберите значение из списка"},DateField:{invalidDate:"Неверный формат даты"},DatePicker:{gotoPrevYear:"Перейти к предыдущему году",gotoPrevMonth:"Перейти к предыдущему месяцу",gotoNextMonth:"Перейти в следующий месяц",gotoNextYear:"Перейти в следующий год"},NumberFormat:{locale:"ru",currency:"RUB"},DurationField:{invalidUnit:"Неверные единицы"},TimeField:{invalidTime:"Неверный формат времени"},TimePicker:{hour:"Час",minute:"Минуты",second:"секунда"},List:{loading:"Загрузка..."},GridBase:{loadMask:"Загрузка...",syncMask:"Сохраняю данные, пожалуйста подождите..."},PagingToolbar:{firstPage:"Перейти на первую страницу",prevPage:"Перейти на предыдущую страницу",page:"страница",nextPage:"Перейти на следующую страницу",lastPage:"Перейти на последнюю страницу",reload:"Перезагрузить текущую страницу",noRecords:"Нет записей для отображения",pageCountTemplate:e=>`из ${e.lastPage}`,summaryTemplate:e=>`Показаны записи ${e.start} - ${e.end} из ${e.allCount}`},PanelCollapser:{Collapse:"Свернуть",Expand:"Развернуть"},Popup:{close:"Закрыть"},UndoRedo:{Undo:"Отменить",Redo:"Повторить",UndoLastAction:"Отменить последнее действие",RedoLastAction:"Повторить последнее отмененное действие",NoActions:"Нет записей в очереди отмены"},FieldFilterPicker:{equals:"равен",doesNotEqual:"не равен",isEmpty:"пустой",isNotEmpty:"не пустой",contains:"содержит",doesNotContain:"не содержит",startsWith:"начинается c",endsWith:"заканчивается с",isOneOf:"входит в",isNotOneOf:"не входит в",isGreaterThan:"больше чем",isLessThan:"меньше чем",isGreaterThanOrEqualTo:"больше или равен",isLessThanOrEqualTo:"меньше или равен",isBetween:"между",isNotBetween:"не между",isBefore:"до",isAfter:"после",isToday:"сегодня",isTomorrow:"завтра",isYesterday:"вчера",isThisWeek:"эта неделя",isNextWeek:"следующая неделя",isLastWeek:"последняя неделя",isThisMonth:"этот месяц",isNextMonth:"следующий месяц",isLastMonth:"последний месяц",isThisYear:"этот год",isNextYear:"следующий год",isLastYear:"последний год",isYearToDate:"год по дате",isTrue:"правда",isFalse:"ложь",selectAProperty:"Выбор свойства",selectAnOperator:"Выбор оператора",caseSensitive:"С учетом регистра",and:"и",dateFormat:"D/M/YYYY",selectOneOrMoreValues:"Выберите одно или несколько значений",enterAValue:"Введите значение",enterANumber:"Введите число",selectADate:"Выберите дату"},FieldFilterPickerGroup:{addFilter:"Добавить фильтр"},DateHelper:{locale:"ru",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"миллисек",plural:"миллисек",abbrev:"мс"},{single:"секунда",plural:"секунд",abbrev:"с"},{single:"минута",plural:"минут",abbrev:"мин"},{single:"час",plural:"часов",abbrev:"ч"},{single:"день",plural:"дней",abbrev:"д"},{single:"неделя",plural:"недели",abbrev:"нед"},{single:"месяц",plural:"месяцев",abbrev:"мес"},{single:"квартал",plural:"кварталов",abbrev:"квар"},{single:"год",plural:"лет",abbrev:"г"},{single:"десятилетие",plural:"десятилетия",abbrev:"дес"}],unitAbbreviations:[["мс","мил"],["с","сек"],["м","мин"],["ч"],["д","ден","дне"],["н","нед"],["мес"],["к","квар","квр"],["г"],["дес"]],parsers:{L:"DD.MM.YYYY",LT:"HH:mm",LTS:"HH:mm:ss"},ordinalSuffix:e=>`${e}-й`}},P=l.publishLocale(C),f=new String,T={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",ColumnPicker:{column:"Колонка",columnsMenu:"Колонки",hideColumn:"Спрятать колонку",hideColumnShort:"Спрятать",newColumns:"Новые столбцы"},Filter:{applyFilter:"Применить фильтр",filter:"Фильтр",editFilter:"Изменить фильтр",on:"В этот день",before:"До",after:"После",equals:"Равно",lessThan:"Меньше, чем",moreThan:"Больше, чем",removeFilter:"Убрать фильтр",disableFilter:"Отключить фильтр"},FilterBar:{enableFilterBar:"Показать панель фильтров",disableFilterBar:"Спрятать панель фильтров"},Group:{group:"Группа",groupAscending:"Группа по возрастанию",groupDescending:"Группа по убыванию",groupAscendingShort:"Возрастание",groupDescendingShort:"Убывание",stopGrouping:"Убрать группу",stopGroupingShort:"Убрать"},HeaderMenu:{moveBefore:e=>`Расположить перед "${e}"`,moveAfter:e=>`Расположить после "${e}"`,collapseColumn:"Свернуть колонку",expandColumn:"Развернуть колонку"},ColumnRename:{rename:"Переименовать"},MergeCells:{mergeCells:"Объединить ячейки",menuTooltip:"Объединить ячейки с одинаковыми значениями при сортировке по этому столбцу"},Search:{searchForValue:"Найти значение"},Sort:{sort:"Сортировка",sortAscending:"Сортировать по возрастанию",sortDescending:"Сортировать по убыванию",multiSort:"Сложная сортировка",removeSorter:"Убрать сортировку",addSortAscending:"Добавить сортировку по возрастанию",addSortDescending:"Добавить сортировку по убыванию",toggleSortAscending:"Сортировать по возрастанию",toggleSortDescending:"Сортировать по убыванию",sortAscendingShort:"Возрастание",sortDescendingShort:"Убывание",removeSorterShort:"Убрать",addSortAscendingShort:"+ Возраст...",addSortDescendingShort:"+ Убыв..."},Column:{columnLabel:e=>`${e.text?`${e.text} столбец. `:""}ПРОБЕЛ для контекстного меню${e.sortable?", ENTER для сортировки":""}`,cellLabel:f},Checkbox:{toggleRowSelect:"Переключить выделение строки",toggleSelection:"Переключить выбор всего набора данных"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`rating : ${e.location.record[e.field]||0} || 0`:""}`}},GridBase:{loadFailedMessage:"Не удалось загрузить!",syncFailedMessage:"Не удалось синхронизировать!",unspecifiedFailure:"Неуказанная ошибка",networkFailure:"Ошибка сети",parseFailure:"Не удалось разобрать ответ сервера",serverResponse:"Ответ сервера:",noRows:"Нет записей для отображения",moveColumnLeft:"Передвинуть в левую секцию",moveColumnRight:"Передвинуть в правую секцию",moveColumnTo:e=>`Переместить колонку в секцию ${e}`},CellMenu:{removeRow:"Удалить"},RowCopyPaste:{copyRecord:"Копировать",cutRecord:"Вырезать",pasteRecord:"Вставить",rows:"строки",row:"строка"},CellCopyPaste:{copy:"Копировать",cut:"Вырезать",paste:"Вставить"},PdfExport:{"Waiting for response from server":"Ожидание ответа от сервера...","Export failed":"Не удалось экспортировать","Server error":"На сервере произошла ошибка","Generating pages":"Генерация страниц...","Click to abort":"Отмена"},ExportDialog:{width:"40em",labelWidth:"13em",exportSettings:"Настройки",export:"Экспорт",exporterType:"Разбивка на страницы",cancel:"Отмена",fileFormat:"Формат файла",rows:"Строки",alignRows:"Выровнять строки",columns:"Колонки",paperFormat:"Размер листа",orientation:"Ориентация",repeatHeader:"Повторять заголовок"},ExportRowsCombo:{all:"Все строки",visible:"Видимые строки"},ExportOrientationCombo:{portrait:"Портретная",landscape:"Ландшафтная"},SinglePageExporter:{singlepage:"Одна страница"},MultiPageExporter:{multipage:"Многостраничный",exportingPage:({currentPage:e,totalPages:t})=>`Экспорт страницы ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Многостраничный (по вертикали)",exportingPage:({currentPage:e,totalPages:t})=>`Экспорт страницы ${e}/${t}`},RowExpander:{loading:"Загрузка",expand:"Развернуть",collapse:"Свернуть"}},w=l.publishLocale(T),E={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",Object:{newEvent:"Новое событие"},ResourceInfoColumn:{eventCountText:e=>e+" "+(e>=2&&e<=4?"события":e!==1?"событий":"событие")},Dependencies:{from:"От",to:"К",valid:"Верная",invalid:"Неверная"},DependencyType:{SS:"НН",SF:"НО",FS:"ОН",FF:"ОО",StartToStart:"Начало-Начало",StartToEnd:"Начало-Окончание",EndToStart:"Окончание-Начало",EndToEnd:"Окончание-Окончание",short:["НН","НО","ОН","ОО"],long:["Начало-Начало","Начало-Окончание","Окончание-Начало","Окончание-Окончание"]},DependencyEdit:{From:"От",To:"К",Type:"Тип",Lag:"Запаздывание","Edit dependency":"Редактировать зависимость",Save:"Сохранить",Delete:"Удалить",Cancel:"Отменить",StartToStart:"Начало к Началу",StartToEnd:"Начало к Окончанию",EndToStart:"Окончание к Началу",EndToEnd:"Окончание к Окончанию"},EventEdit:{Name:"Название",Resource:"Ресурс",Start:"Начало",End:"Конец",Save:"Сохранить",Delete:"Удалить",Cancel:"Отмена","Edit event":"Изменить событие",Repeat:"Повтор"},EventDrag:{eventOverlapsExisting:"Событие перекрывает существующее событие для этого ресурса",noDropOutsideTimeline:"Событие не может быть отброшено полностью за пределами графика"},SchedulerBase:{"Add event":"Добавить событие","Delete event":"Удалить событие","Unassign event":"Убрать назначение с события"},TimeAxisHeaderMenu:{pickZoomLevel:"Выберите масштаб",activeDateRange:"Диапазон дат",startText:"Начало",endText:"Конец",todayText:"Сегодня"},EventCopyPaste:{copyEvent:"Копировать событие",cutEvent:"Вырезать событие",pasteEvent:"Вставить событие"},EventFilter:{filterEvents:"Фильтровать задачи",byName:"По имени"},TimeRanges:{showCurrentTimeLine:"Показать линию текущего времени"},PresetManager:{secondAndMinute:{name:"секунды"},minuteAndHour:{topDateFormat:"ddd DD.MM, HH:mm"},hourAndDay:{topDateFormat:"ddd DD.MM",name:"день"},day:{name:"день/часы"},week:{name:"Неделя/часы"},dayAndWeek:{name:"Неделя/дни"},dayAndMonth:{name:"месяц"},weekAndDay:{displayDateFormat:"HH:mm",name:"неделяa"},weekAndMonth:{name:"недели"},weekAndDayLetter:{name:"недели/будние дни"},weekDateAndMonth:{name:"Месяцы/недели"},monthAndYear:{name:"Месяцы"},year:{name:"Годы"},manyYears:{name:"Meerdere jaren"}},RecurrenceConfirmationPopup:{"delete-title":"Вы удаляете повторяющееся событие","delete-all-message":"Хотите удалить все повторения этого события?","delete-further-message":"Хотите удалить это и все последующие повторения этого события или только выбранное?","delete-further-btn-text":"Удалить все будущие повторения","delete-only-this-btn-text":"Удалить только это событие","update-title":"Вы изменяете повторяющееся событие","update-all-message":"Изменить все повторения события?","update-further-message":"Изменить только это повторение или это и все последующие повторения события?","update-further-btn-text":"Все будущие повторения","update-only-this-btn-text":"Только это событие",Yes:"Да",Cancel:"Отменить",width:600},RecurrenceLegend:{" and ":" и ",Daily:"Ежедневно","Weekly on {1}":({days:e})=>`Еженедельно (${e})`,"Monthly on {1}":({days:e})=>`Ежемесячно (день: ${e})`,"Yearly on {1} of {2}":({days:e,months:t})=>`Ежегодно (день: ${e}, месяц: ${t})`,"Every {0} days":({interval:e})=>`Каждый ${e} день`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Каждую ${e} неделю, день: ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Каждый ${e} месяц, день: ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`Каждый ${e} год, день: ${t} месяц: ${a}`,position1:"первый",position2:"второй",position3:"третий",position4:"четвертый",position5:"пятый","position-1":"последний",day:"день",weekday:"будний день","weekend day":"выходной день",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Повторять событие",Cancel:"Отменить",Save:"Сохранить",Frequency:"Как часто",Every:"Каждый(ую)",DAILYintervalUnit:"день",WEEKLYintervalUnit:"неделю",MONTHLYintervalUnit:"месяц",YEARLYintervalUnit:"год/лет",Each:"Какого числа","On the":"В следующие дни","End repeat":"Прекратить","time(s)":"раз(а)"},RecurrenceDaysCombo:{day:"день",weekday:"будний день","weekend day":"выходной день"},RecurrencePositionsCombo:{position1:"первый",position2:"второй",position3:"третий",position4:"четвертый",position5:"пятый","position-1":"последний"},RecurrenceStopConditionCombo:{Never:"Никогда",After:"После","On date":"В дату"},RecurrenceFrequencyCombo:{None:"Без повторения",Daily:"Каждый день",Weekly:"Каждую неделю",Monthly:"Каждый месяц",Yearly:"Каждый год"},RecurrenceCombo:{None:"Не выбрано",Custom:"Настроить..."},Summary:{"Summary for":e=>`Сводка на ${e}`},ScheduleRangeCombo:{completeview:"Полное расписание",currentview:"Текущая видимая область",daterange:"Диапазон дат",completedata:"Полное расписание (по всем событиям)"},SchedulerExportDialog:{"Schedule range":"Диапазон расписания","Export from":"С","Export to":"По"},ExcelExporter:{"No resource assigned":"Ресурс не назначен"},CrudManagerView:{serverResponseLabel:"Ответ сервера:"},DurationColumn:{Duration:"Длительность"}},x=l.publishLocale(E),S={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",ConstraintTypePicker:{none:"Нет",muststarton:"Фиксированное начало",mustfinishon:"Фиксированное окончание",startnoearlierthan:"Начало не раньше",startnolaterthan:"Начало не позднее",finishnoearlierthan:"Окончание не раньше",finishnolaterthan:"Окончание не позднее"},CalendarField:{"Default calendar":"Основной календарь"},TaskEditorBase:{Information:"Информация",Save:"Сохранить",Cancel:"Отменить",Delete:"Удалить",calculateMask:"Рассчитываю задачи...",saveError:"Сохранение невозможно, исправьте ошибки",repeatingInfo:"Просмотр повторяющегося события",editRepeating:"Редактировать"},TaskEdit:{"Edit task":"Изменить задачу",ConfirmDeletionTitle:"Подтвердите удаление",ConfirmDeletionMessage:"Вы уверены, что хотите удалить событие?"},GanttTaskEditor:{editorWidth:"54em"},SchedulerTaskEditor:{editorWidth:"41em"},SchedulerGeneralTab:{labelWidth:"9em",General:"Основные",Name:"Имя",Resources:"Ресурсы","% complete":"% выполнено",Duration:"Длительность",Start:"Начало",Finish:"Окончание",Effort:"Трудозатраты",Preamble:"Вхождение",Postamble:"Выход"},GeneralTab:{labelWidth:"9em",General:"Основные",Name:"Имя","% complete":"% выполнено",Duration:"Длительность",Start:"Начало",Finish:"Окончание",Effort:"Трудозатраты",Dates:"Даты"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Дополнительно",Calendar:"Календарь","Scheduling mode":"Тип планирования","Effort driven":"Управляемое трудозатратами","Manually scheduled":"Ручное планирование","Constraint type":"Тип ограничения","Constraint date":"Дата ограничения",Inactive:"Неактивна","Ignore resource calendar":"Не учитывать календарь ресурса"},AdvancedTab:{labelWidth:"18em",Advanced:"Дополнительные",Calendar:"Календарь","Scheduling mode":"Тип планирования","Effort driven":"Управляемое трудозатратами","Manually scheduled":"Ручное планирование","Constraint type":"Тип ограничения","Constraint date":"Дата ограничения",Constraint:"Ограничение",Rollup:"Сведение",Inactive:"Неактивна","Ignore resource calendar":"Не учитывать календарь ресурса"},DependencyTab:{Predecessors:"Предшественники",Successors:"Последователи",ID:"Идентификатор",Name:"Имя",Type:"Тип",Lag:"Запаздывание",cyclicDependency:"Обнаружена цикличная зависимость",invalidDependency:"Неверная зависимость"},NotesTab:{Notes:"Заметки"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Ресурсы",Resource:"Ресурс",Units:"% Занятости"},RecurrenceTab:{title:"Повтор"},SchedulingModePicker:{Normal:"Нормальный","Fixed Duration":"Фиксированная длительность","Fixed Units":"Фиксированные единицы","Fixed Effort":"Фиксированные трудозатраты"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} из {available}</span> использовано',barTipOnDate:'<b>{resource}</b> {startDate}<br><span class="{cls}">{allocated} из {available}</span> использовано',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} из {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} из {available}</span> использовано:<br>{assignments}',groupBarTipOnDate:'{startDate}<br><span class="{cls}">{allocated} из {available}</span> использовано:<br>{assignments}',plusMore:"Еще +{value}"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> использовано',barTipOnDate:'<b>{event}</b> {startDate}<br><span class="{cls}">{allocated}</span> использовано',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} из {available}</span> использовано:<br>{assignments}',groupBarTipOnDate:'{startDate}<br><span class="{cls}">{allocated} из {available}</span> использовано:<br>{assignments}',plusMore:"Еще +{value}",nameColumnText:"Ресурс / Событие"},SchedulingIssueResolutionPopup:{"Cancel changes":"Отменить изменения",schedulingConflict:"Конфликт планирования",emptyCalendar:"Ошибка данных календаря",cycle:"Цикл планирования",Apply:"Применить"},CycleResolutionPopup:{dependencyLabel:"Пожалуйста выберите зависимость для исправления:",invalidDependencyLabel:"Есть неверные зависимости которые необходимо исправить:"},DependencyEdit:{Active:"Действующая"},SchedulerProBase:{propagating:"Расчет проекта",storePopulation:"Загрузка данных",finalizing:"Завершение"},EventSegments:{splitEvent:"Прервать событие",renameSegment:"Переименовать"},NestedEvents:{deNestingNotAllowed:"Извлечение запрещено",nestingNotAllowed:"Вложение запрещено"},VersionGrid:{compare:"Сравнивать",description:"Описание",occurredAt:"Произошло в",rename:"Переименовать",restore:"Восстановить",stopComparing:"Прекратить сравнение"},Versions:{entityNames:{TaskModel:"задача",AssignmentModel:"назначение",DependencyModel:"связь",ProjectModel:"проект",ResourceModel:"ресурс",other:"объект"},entityNamesPlural:{TaskModel:"задач",AssignmentModel:"назначений",DependencyModel:"связей",ProjectModel:"проектов",ResourceModel:"русурсов",other:"объектов"},transactionDescriptions:{update:"Изменено: {n} {entities}",add:"Добавлено: {n} {entities}",remove:"Удалено: {n} {entities}",move:"Перемещено {n} {entities}",mixed:"Изменено: {n} {entities}"},addEntity:"Добавлено: {type} {name}",removeEntity:"Удалено: {type} {name}",updateEntity:"Изменено: {type} {name}",moveEntity:"Перемещен {type} {name} от {from} к {to}",addDependency:"Добавлена свзяь {from} с {to}",removeDependency:"Удалена связь {from} с {to}",updateDependency:"Изменена свзяь {from} с {to}",addAssignment:"Назначен {resource} для {event}",removeAssignment:"Удалено назначение {resource} для {event}",updateAssignment:"Изменено назначение {resource} для {event}",noChanges:"Нет изменений",nullValue:"ничто",versionDateFormat:"D/M/YYYY HH:mm",undid:"Отмена изменений",redid:"Возвращение изменений",editedTask:"Изменены свойства задачи",deletedTask:"Удалена задача",movedTask:"Задача перемещена",movedTasks:"Задачи перемещены"}},A=l.publishLocale(S),R={localeName:"Ru",localeDesc:"Русский",localeCode:"ru",Object:{Save:"Сохранить"},IgnoreResourceCalendarColumn:{"Ignore resource calendar":"Не учитывать календарь ресурса"},InactiveColumn:{Inactive:"Неактивна"},AddNewColumn:{"New Column":"Добавить столбец..."},CalendarColumn:{Calendar:"Календарь"},EarlyStartDateColumn:{"Early Start":"Раннее начало"},EarlyEndDateColumn:{"Early End":"Раннее окончание"},LateStartDateColumn:{"Late Start":"Позднее начало"},LateEndDateColumn:{"Late End":"Позднее окончание"},TotalSlackColumn:{"Total Slack":"Общий временной резерв"},ConstraintDateColumn:{"Constraint Date":"Дата ограничения"},ConstraintTypeColumn:{"Constraint Type":"Тип ограничения"},DeadlineDateColumn:{Deadline:"Крайний срок"},DependencyColumn:{"Invalid dependency":"Неверная зависимость"},DurationColumn:{Duration:"Длительность"},EffortColumn:{Effort:"Трудозатраты"},EndDateColumn:{Finish:"Конец"},EventModeColumn:{"Event mode":"Режим расчёта",Manual:"Ручной",Auto:"Автоматический"},ManuallyScheduledColumn:{"Manually scheduled":"Ручное планирование"},MilestoneColumn:{Milestone:"Веха"},NameColumn:{Name:"Наименование задачи"},NoteColumn:{Note:"Примечание"},PercentDoneColumn:{"% Done":"% завершения"},PredecessorColumn:{Predecessors:"Предшествующие"},ResourceAssignmentColumn:{"Assigned Resources":"Назначенные ресурсы","more resources":"ресурсов"},RollupColumn:{Rollup:"Сведение"},SchedulingModeColumn:{"Scheduling Mode":"Режим"},SequenceColumn:{Sequence:"#"},ShowInTimelineColumn:{"Show in timeline":"Показать на временной шкале"},StartDateColumn:{Start:"Начало"},SuccessorColumn:{Successors:"Последующие"},TaskCopyPaste:{copyTask:"Копировать",cutTask:"Вырезать",pasteTask:"Вставить"},WBSColumn:{WBS:"СДР",renumber:"Обновить"},DependencyField:{invalidDependencyFormat:"Неверный формат зависимости"},ProjectLines:{"Project Start":"Начало проекта","Project End":"Окончание проекта"},TaskTooltip:{Start:"Начинается",End:"Заканчивается",Duration:"Длительность",Complete:"Выполнено"},AssignmentGrid:{Name:"Имя ресурса",Units:"Занятость",unitsTpl:({value:e})=>e?e+"%":""},Gantt:{Edit:"Изменить",Indent:"Понизить уровень",Outdent:"Повысить уровень","Convert to milestone":"Преобразовать в веху",Add:"Добавить...","New task":"Новая задача","New milestone":"Новая веха","Task above":"Задачу выше","Task below":"Задачу ниже","Delete task":"Удалить",Milestone:"Веху","Sub-task":"Под-задачу",Successor:"Последующую задачу",Predecessor:"Предшествующую задачу",changeRejected:"Изменения отклонены системой",linkTasks:"Добавить зависимости",unlinkTasks:"Удалить зависимости"},EventSegments:{splitTask:"Прервать задачу"},Indicators:{earlyDates:"Раннее начало/окончание",lateDates:"Позднее начало/окончание",Start:"Начало",End:"Конец",deadlineDate:"Крайний срок"},Versions:{indented:"Уровень понижен",outdented:"Уровень повышен",cut:"Вырезано",pasted:"Вставлено",deletedTasks:"Удаленные задачи"}},k=l.publishLocale(R);if(typeof r.exports=="object"&&typeof i=="object"){var M=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,o)&&o!==a&&Object.defineProperty(e,o,{get:()=>t[o],enumerable:!(n=Object.getOwnPropertyDescriptor(t,o))||n.enumerable});return e};r.exports=M(r.exports,i)}return r.exports});
