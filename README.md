# ![](small.png) TimeTask 
is simply library for run multiple function in queue with timeout

## Classes

<dl>
<dt><a href="#TimeTask">TimeTask</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Function">Function</a> ⇒ <code>Boolean</code></dt>
<dd><p>Return boolean when run execution is finished</p>
</dd>
</dl>

<a name="TimeTask"></a>

## TimeTask
**Kind**: global class
**Default**: <code>2500</code>
**Version**: 1.0.0
**Author**: Joel ONIPOH <https://github.com/koffiisen>

* [TimeTask](#TimeTask)
    * [new TimeTask(delay)](#new_TimeTask_new)
    * [.clear()](#TimeTask+clear)
    * [.setIndex(index)](#TimeTask+setIndex)
    * [.subscribe(fn, delay)](#TimeTask+subscribe)
    * [.next()](#TimeTask+next)
    * [.reset()](#TimeTask+reset)
    * [.run(index)](#TimeTask+run)
    * [.unsubscribe(fn)](#TimeTask+unsubscribe)
    * [.unsubscribeAll()](#TimeTask+unsubscribeAll)

<a name="new_TimeTask_new"></a>

### new TimeTask(delay)
TimeTask is simply library for run multiple function in queue with timeout


| Param | Type | Description |
| --- | --- | --- |
| delay | <code>Number</code> | ms |

**Example**
```js
setTimeout(function () { task.run(); }, 100)sole.log("FINISHED ALL TASK") })
```
<a name="TimeTask+clear"></a>

### timeTask.clear()
Clear Queue and reset index

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)
<a name="TimeTask+setIndex"></a>

### timeTask.setIndex(index)
Set current queue index

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)

| Param | Type |
| --- | --- |
| index | <code>Number</code> |

**Example**
```js
task.setIndex(2)
```
<a name="TimeTask+subscribe"></a>

### timeTask.subscribe(fn, delay)
Add new function in queue

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| delay | <code>Number</code> | !! by default is used constructor delay !! |

**Example**
```js
task.subscribe(hi);tion () { console.log("MY first Function") })
```
<a name="TimeTask+next"></a>

### timeTask.next()
Call next function in queue

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)
<a name="TimeTask+reset"></a>

### timeTask.reset()
Reset queue index

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)
<a name="TimeTask+run"></a>

### timeTask.run(index)
Run all function in queue

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | !! it possible to set index of start !! |

**Example**
```js
// setTimeout(function () { task.run(); }, 2000)
```
<a name="TimeTask+unsubscribe"></a>

### timeTask.unsubscribe(fn)
remove specific function in queue

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | !! IF FUNCTION HAVE NAME !! |

**Example**
```js
task.unsubscribe(hi)
```
<a name="TimeTask+unsubscribeAll"></a>

### timeTask.unsubscribeAll()
Remove all function in queue

**Kind**: instance method of [<code>TimeTask</code>](#TimeTask)
<a name="Function"></a>

## Function ⇒ <code>Boolean</code>
Return boolean when run execution is finished

**Kind**: global typedef

| Param | Type |
| --- | --- |
| callback | <code>function</code> |

**Example**
```js
task.watch(function(state){console.log(state)})
```
