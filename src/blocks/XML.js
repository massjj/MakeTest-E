var codelabToolbox1 = `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="Starting-Ending" colour="#BF2C23">
    <block type="_001">
      <value name="DESCRIBE_TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
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
        <shadow type="_013">
          <field name="PROPERTY">be.exist</field>
        </shadow>
      </value>
    </block>
    <block type="_012" />
    <block type="_010" />
    <block type="_013" />
    <block type="_014" />
    <block type="_006">
      <value name="IF0">
        <shadow type="_012">
          <field name="CONDITION">false</field>
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
    <block type="_023">
      <field name="POPUP_CHECK">alert</field>
      <value name="POPUP_TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
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
  <category name="Variables" colour="330" custom="VARIABLE"></category>
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
      <field name="CONDITION">true</field>
    </block>
    <block type="_036">
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
  <category name="File" colour="#4C384D">
    <block type="_044">
      <field name="ATTACH_FILE">OPTIONNAME</field>
      <value name="ATTACH_FILE_ID">
        <shadow type="_027">
          <field name="ID_ELE">ID element</field>
        </shadow>
      </value>
    </block>
    <block type="_045">
		  <value name="FILE_NAME">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
	</block>
  </category>

  
  <sep gap="32"></sep>
  <category name="Text" colour="#8D4CAB">
    <block type="text"></block>
  </category>  

  <category name="Math" colour="#A5A824">
    <block type="math_number"></block>
  </category>
</xml>
`