var codelabToolbox1 = `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="Starting-Ending" colour="#BF2C23">
    <block type="_003">
      <field name="PRE_TIMES">one_times</field>
    </block>
    <block type="_002">
      <value name="IT_TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="_004">
      <field name="AFTER_TIMES">one_times</field>
    </block>
    <block type="_005">
      <field name="end">end</field>
    </block>
  </category>
  <category name="Logic" colour="#5DA688">
    <block type="_008">
      <value name="EXPECT_PARAM">
        <shadow type="param"></shadow>
      </value>
    </block>
    <block type="_007">
      <value name="ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
      <value name="LOGIC">
        <block type="_013">
          <field name="PROPERTY">be.exist</field>
        </block>
      </value>
    </block>
    <block type="_009">
      <value name="FILTER_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
      <value name="FILTER_TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
      <value name="FILTER_LOGIC">
        <block type="_013">
          <field name="PROPERTY">be.exist</field>
        </block>
      </value>
    </block>
    <block type="_012" />
    <block type="_010">
      <value name="CHAINER_1">
        <block type="_013">
          <field name="PROPERTY">be.exist</field>
        </block>
      </value>
      <value name="CHAINER_2">
        <block type="_013">
          <field name="PROPERTY">be.exist</field>
        </block>
      </value>
    </block>
    <block type="_013" />
    <block type="_014" >
      <value name="CONDITION_1">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="CONDITION_2">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="_006">
      <value name="IF0">
        <shadow type="_012">
          <field name="CONDITION">false</field>
        </shadow>
      </value>
    </block>
    <block type="_023">
      <field name="POPUP_CHECK">alert</field>
      <value name="POPUP_TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Action" colour="#0071DE">
    <block type="_015">
      <value name="CLEAR_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_016">
      <value name="CLICK_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_017">
      <value name="DB_CLICK">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_018">
      <value name="R_CLICK">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_019">
      <value name="SUBMIT">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_020">
      <value name="TYPE_TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
      <value name="TYPE_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_021">
      <value name="UNCHECK_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
      <value name="UNCHECK_VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="_022">
      <value name="VIEW_WIDTH">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="VIEW_HEIGHT">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="_024">
      <value name="SELECT_VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
      <value name="SELECT_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="Identify Element" colour="#006583">
    <block type="_027"></block>
    <block type="_028">
      <field name="POSITION">first</field>
      <value name="ID_POSITION">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_029">
      <value name="ELEMENT_POSITION">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
      <value name="ELEMENT_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_030">
      <field name="MATCH_CASE">match_case</field>
      <value name="ELEMENT_MATCHCASE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="_032">
      <value name="THEN_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
      <value name="THEN_PARAM">
        <shadow type="param">
        </shadow>
      </value>
    </block>
    <block type="_033">
      <value name="WITHIN_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
      <value name="WITHIN_PARAM">
        <shadow type="param">
        </shadow>
      </value>
    </block>
  </category>
  <category name="Loop" colour="#E7A03C">
    <block type="param" />
    <block type="_034">
      <value name="REPEAT_TIMES">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="_035">
      <value name="WHILE_LOGIC">
        <shadow type="_012">
          <field name="CONDITION">true</field>
        </shadow>  
      </value>
    </block>
    <block type="_036">
      <value name="FOR_INDEX">
        <block type="variables_get"></block>
      </value>
      <value name="FOR_NUM">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="_037">
      <value name="FOREACH_PARAM">
        <shadow type="param">
        </shadow>
      </value>
      <value name="FOREACH_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_038"></block>
    <block type="_039"></block>
  </category>
  <category name="URL" colour="#FA7A4C">
    <block type="_040">
      <value name="VISIT_TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="_041">
      <value name="URL_LOGIC">
        <block type="_013">
          <field name="PROPERTY">be.exist</field>
        </block>
      </value>
    </block>
    <block type="_042"></block>
    <block type="_043">
      <field name="GO_POSITION">back</field>
    </block>
  </category>

  <category name="Variables" colour="330" custom="VARIABLE">
    <block type="variables_get"></block>
    <block type="variables_set">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
  </category>

  <sep gap="32"></sep>

  <category name="Advance">

    <category name="Text" colour="#8D4CAB">
      <block type="text"></block>
      <block type="_069">
        <value name="STRING">
          <block type="variables_get">
            <field name="VAR">String</field>
          </block>
        </value>
      </block>
      <block type="_071">
        <value name="STRING_PARSE">
          <block type="variables_get">
            <field name="VAR">String</field>
          </block>
        </value>
      </block>
      <block type="_072">
        <value name="STRING">
          <block type="variables_get">
            <field name="VAR">String</field>
          </block>
        </value>
        <value name="SEP">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="_074">
        <value name="NUMBER">
          <block type="variables_get">
            <field name="VAR">String</field>
          </block>
        </value>
      </block>
    </category>  

    <category name="Math" colour="#A5A824">
      <block type="_063"></block>
      <block type="_064">
        <value name="MIN_NUMBER">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="MAX_NUMBER">
          <shadow type="_063">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="_065">
        <value name="NUMBER_1">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="NUMBER_2">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="_066">
        <value name="NUMBER">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="_067">
        <value name="NUMBER_1">
        <shadow type="_063">
          <field name="NUM">0</field>
        </shadow>
        </value>
        <value name="NUMBER_2">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
    </category>

    <category name="Time" colour="#9F1158">
      <block type="_075">
        <value name="TIME">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="_076">
        <value name="TIME">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>  
    </category>

    <category name="Console" colour="#8B8383">
      <block type="_077">
        <value name="CONSOLE_STRING">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
    </category>
    <category name="Array" colour="#0D929B">
      <block type="variables_set">
        <field name="VAR">list</field>
        <value name="VALUE">
          <block type="_047">
            <mutation items="2"></mutation>
          </block>
        </value>
      </block>
      <block type="_047"></block>
      <block type="_048">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="_049">
        <value name="ARRAY_VAR">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
        <value name="INDEX">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="_051">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="_052">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="_053">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="_054">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
        <value name="INDEX">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="SET_VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="_055">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
        <value name="SET_VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="_050">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
        <value name="INDEX">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="_058">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
        <value name="INDEX">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="_060">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
        <value name="INDEX">
          <shadow type="_063">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="SET_VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="_061">
        <value name="ARRAY">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
        <value name="GET_VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="_062">
        <value name="NAME">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
    </category>
  </category>

</xml>
`