<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="comment" id="HG3+jo`_8LHq9fVo{RIq" x="163" y="1088">
    <field name="COMMENT">v Ziffernfeld mischen?</field>
    <next>
      <block type="variables_set" id="[QH0s`-1rx?nv?;Qm_jQ">
        <field name="VAR">Mischen</field>
        <value name="VALUE">
          <block type="logic_boolean" id="M`+Vz=-BCa!or;fOlH9d">
            <field name="BOOL">FALSE</field>
          </block>
        </value>
        <next>
          <block type="comment" id="{*nmNK)f1%r7A.jP,9%=">
            <field name="COMMENT">v Nach jedem Tastendruck mischen?</field>
            <next>
              <block type="variables_set" id="(FX6{2UvilYos0o.9^T~">
                <field name="VAR">Immer Mischen</field>
                <value name="VALUE">
                  <block type="logic_boolean" id="oWW*QBAGfoALzi+@Yl-t">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
                <next>
                  <block type="comment" id="p|)YZy%v?J6%|Z%?;@tR">
                    <field name="COMMENT">v Zurücksetzen der eingabe erlauben?</field>
                    <next>
                      <block type="variables_set" id="FZGQJo{3yQ;[Uy#|/FY2">
                        <field name="VAR">reset zulassen</field>
                        <value name="VALUE">
                          <block type="logic_boolean" id="S**nks[k]Wul2g#k)-m:">
                            <field name="BOOL">TRUE</field>
                          </block>
                        </value>
                        <next>
                          <block type="procedures_callcustomnoreturn" id="DVYn?v|gFZ|72Hec,?D*">
                            <mutation name="Anlegen der Objekte"></mutation>
                            <next>
                              <block type="timeouts_settimeout" id="fMZJ_`ePttZh8(!}%qXt" collapsed="true">
                                <field name="NAME">timeout_setzen_aller_def_werte</field>
                                <field name="DELAY">1000</field>
                                <field name="UNIT">ms</field>
                                <statement name="STATEMENT">
                                  <block type="procedures_callnoreturn" id="fHBVAfDV5^OnfEZH-HD~">
                                    <mutation name="Zaehler und PW zuruecksetzen"></mutation>
                                    <next>
                                      <block type="procedures_callnoreturn" id="P4h._11UpcORR}f|(%AQ">
                                        <mutation name="Ziffern auf X und mischen"></mutation>
                                      </block>
                                    </next>
                                  </block>
                                </statement>
                                <next>
                                  <block type="on_ext" id="j7I!`2}/I-|/heMaLLwW" inline="true" collapsed="true">
                                    <mutation items="1"></mutation>
                                    <field name="CONDITION">true</field>
                                    <field name="ACK_CONDITION"></field>
                                    <value name="OID0">
                                      <shadow type="field_oid" id="w?2#v@I4l/kh+:,CZXe2">
                                        <field name="oid">default</field>
                                      </shadow>
                                      <block type="field_oid" id="%`fB|i}m%@6PS9THVQs[">
                                        <field name="oid">javascript.0.Ziffernfeld.Reset</field>
                                      </block>
                                    </value>
                                    <statement name="STATEMENT">
                                      <block type="controls_if" id="SZ`{/6?J{TI{gD4WFTLU">
                                        <value name="IF0">
                                          <block type="logic_operation" id="}[e!mggzQ*;a]fN)Luz-" inline="false">
                                            <field name="OP">AND</field>
                                            <value name="A">
                                              <block type="logic_compare" id="o1^a#V%z)6-shZ7-Vo}#">
                                                <field name="OP">EQ</field>
                                                <value name="A">
                                                  <block type="variables_get" id="V.FvB3G:Tx}{K=S0HB:,">
                                                    <field name="VAR">reset zulassen</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="logic_boolean" id="S5p}(1U-u)=+k,_]DrW^">
                                                    <field name="BOOL">TRUE</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="B">
                                              <block type="logic_operation" id="^36Ti[k(BbYQ07qizQqd" inline="false">
                                                <field name="OP">OR</field>
                                                <value name="A">
                                                  <block type="logic_operation" id="-X#Q?tgXm.4b0YraGtcg" inline="false">
                                                    <field name="OP">OR</field>
                                                    <value name="A">
                                                      <block type="logic_compare" id="TESnNo),2AO9%Ox_h*({">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                          <block type="variables_get" id="t_:eS2wKM/}?,)r7~;C(">
                                                            <field name="VAR">Zaehler</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="math_number" id="tg(J:.k53^Ms#bv:FIuV">
                                                            <field name="NUM">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="logic_compare" id="%E%Zo/W.9YpnwF.`X4ks">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                          <block type="variables_get" id="}cHC8OAFuIn1UTo6ya]+">
                                                            <field name="VAR">Zaehler</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <block type="math_number" id="+vZ@XZJL{,0Zv}C5FiO7">
                                                            <field name="NUM">2</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="logic_compare" id="l:xsAA.i/4qumq%Y^?Q;">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get" id="^@HHwFw=MtvNt.q}!%qm">
                                                        <field name="VAR">Zaehler</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="math_number" id="x#)xx(n_6M)/nOLW~j@J">
                                                        <field name="NUM">3</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="control" id="G+a=yhB,WtQP+q:7P:96">
                                            <mutation delay_input="false"></mutation>
                                            <field name="OID">javascript.0.Ziffernfeld.Reset</field>
                                            <field name="WITH_DELAY">FALSE</field>
                                            <value name="VALUE">
                                              <block type="logic_boolean" id="%F]/D:Mwx249O+1zJ9~Q">
                                                <field name="BOOL">FALSE</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="procedures_callnoreturn" id="H{Jni;ZC^)A]oe+vxL@#">
                                                <mutation name="Zaehler und PW zuruecksetzen"></mutation>
                                              </block>
                                            </next>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="on_ext" id="yC/ukPKKp./e)_ig`hxU" inline="true" collapsed="true">
                                        <mutation items="1"></mutation>
                                        <field name="CONDITION">true</field>
                                        <field name="ACK_CONDITION"></field>
                                        <value name="OID0">
                                          <shadow type="field_oid" id="pL5i1^cSh#]dK_0XvzH^">
                                            <field name="oid">default</field>
                                          </shadow>
                                          <block type="field_oid" id="Yn%Zt;02u56T+pP]-W+|">
                                            <field name="oid">javascript.0.Ziffernfeld.Neu_Mischen</field>
                                          </block>
                                        </value>
                                        <statement name="STATEMENT">
                                          <block type="controls_if" id="Fx@QMH=2+g_!z~)Nw-]#">
                                            <value name="IF0">
                                              <block type="logic_operation" id="N1Owai|ECcC!H_;OqQfX" inline="false">
                                                <field name="OP">OR</field>
                                                <value name="A">
                                                  <block type="logic_compare" id="4Vu0c@[_46Eb]]WnkykT">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get" id="NGrqux_,zL[9u-[V7C-}">
                                                        <field name="VAR">Mischen</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="logic_boolean" id="GgoMY6t;3GHlJv(m^FAk">
                                                        <field name="BOOL">TRUE</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <block type="logic_compare" id="Hx~a_BTC?I_=c-rmj*_c">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get" id="hL7cv|+GGGtpJedUeT{Z">
                                                        <field name="VAR">Immer Mischen</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="logic_boolean" id="h!.hHAfQmy1W`RSK)W+8">
                                                        <field name="BOOL">TRUE</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="control" id="@G:NlePKDc^e?sasw.lH">
                                                <mutation delay_input="false"></mutation>
                                                <field name="OID">javascript.0.Ziffernfeld.Neu_Mischen</field>
                                                <field name="WITH_DELAY">FALSE</field>
                                                <value name="VALUE">
                                                  <block type="logic_boolean" id="+um;0{(]NUjrt.DVoW!.">
                                                    <field name="BOOL">FALSE</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="procedures_callnoreturn" id="H%wstBG?Sd*Cd-dh}}=r">
                                                    <mutation name="Ziffern auf X und mischen"></mutation>
                                                  </block>
                                                </next>
                                              </block>
                                            </statement>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="on_ext" id="2*yZv69/?I=d|%+wtWs|" collapsed="true">
                                            <mutation items="1"></mutation>
                                            <field name="CONDITION">any</field>
                                            <field name="ACK_CONDITION"></field>
                                            <value name="OID0">
                                              <shadow type="field_oid" id="iNJM*{lU[BbhZ=UHNslZ">
                                                <field name="oid">default</field>
                                              </shadow>
                                              <block type="lists_create_with" id="AzGi67,PC(r3pwiD;p|a" collapsed="true">
                                                <mutation items="10"></mutation>
                                                <value name="ADD0">
                                                  <block type="field_oid" id=";HN|K/Ph7{mm:RkN/OL!">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-0</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="field_oid" id="@g{Z3Hh`x#,ra[sJ!V^p">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-1</field>
                                                  </block>
                                                </value>
                                                <value name="ADD2">
                                                  <block type="field_oid" id="_Njc;9!u:*dsO:?i*kKa">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-2</field>
                                                  </block>
                                                </value>
                                                <value name="ADD3">
                                                  <block type="field_oid" id="9nx`Bnob4:C/bCBaSm%j">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-3</field>
                                                  </block>
                                                </value>
                                                <value name="ADD4">
                                                  <block type="field_oid" id="%W9a/JlcK3j/x+8GuATy">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-4</field>
                                                  </block>
                                                </value>
                                                <value name="ADD5">
                                                  <block type="field_oid" id="Y!Kzm-`Kz.9OUKG|G4-,">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-5</field>
                                                  </block>
                                                </value>
                                                <value name="ADD6">
                                                  <block type="field_oid" id="u=b8JNMG7,8_wCV^0#Qx">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-6</field>
                                                  </block>
                                                </value>
                                                <value name="ADD7">
                                                  <block type="field_oid" id="Sb|@*_`J[HG5OUtG-Q},">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-7</field>
                                                  </block>
                                                </value>
                                                <value name="ADD8">
                                                  <block type="field_oid" id="N;|TS7Ix+P^NA}9Y43or">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-8</field>
                                                  </block>
                                                </value>
                                                <value name="ADD9">
                                                  <block type="field_oid" id="`3_hr!;ford0H7MH4uVB">
                                                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-9</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="STATEMENT">
                                              <block type="controls_if" id="cpN/it9@iaZ8M)kwB6%z">
                                                <value name="IF0">
                                                  <block type="logic_compare" id="^pQA}%{#EC:EDfbP#n[c">
                                                    <field name="OP">EQ</field>
                                                    <value name="A">
                                                      <block type="variables_get" id="2?2hs:KTaJWO*BBc+G^I">
                                                        <field name="VAR">Starte_Abfrage</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <block type="logic_boolean" id="9+OT*nM[x-K~I~ol=eVJ">
                                                        <field name="BOOL">TRUE</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <statement name="DO0">
                                                  <block type="variables_set" id=".J?XkgBql*l:!m4UOEI|">
                                                    <field name="VAR">Zaehler</field>
                                                    <value name="VALUE">
                                                      <block type="math_arithmetic" id="6^jYaL:(A4i8xJmi./zz">
                                                        <field name="OP">ADD</field>
                                                        <value name="A">
                                                          <shadow type="math_number" id="A^p0.k3V5;}VCYlqe(a`">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                          <block type="variables_get" id="i0#=PY_,IGlta%qJm4%P">
                                                            <field name="VAR">Zaehler</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <shadow type="math_number" id="*S|7~3V}`GGZU%Aq],/n">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                          <block type="math_number" id="IfYb7-ZquB5rDk,!i;hL">
                                                            <field name="NUM">1</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="timeouts_settimeout" id="3_pszsMeme=xq(V*H=_=">
                                                        <field name="NAME">timeout2</field>
                                                        <field name="DELAY">100</field>
                                                        <field name="UNIT">ms</field>
                                                        <statement name="STATEMENT">
                                                          <block type="controls_if" id="13h9q,NsgA@2b[Oo%?q!">
                                                            <mutation elseif="3"></mutation>
                                                            <value name="IF0">
                                                              <block type="logic_compare" id="#[g0hEARXG,gs,pHHwaS">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="%H_g,_+ZA?:XZZ0}G./{">
                                                                    <field name="VAR">Zaehler</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number" id="%f(cm:3gDfqL4Wp7/#|p">
                                                                    <field name="NUM">1</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO0">
                                                              <block type="variables_set" id="2khr0JGaWyqz5yvLdCT:">
                                                                <field name="VAR">PW1</field>
                                                                <value name="VALUE">
                                                                  <block type="on_source" id=".^_e{ZM~FmO7B}U%t.qh">
                                                                    <field name="ATTR">state.val</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </statement>
                                                            <value name="IF1">
                                                              <block type="logic_compare" id="DMvJPX^A{t+64!ZLd}%M">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="DTdf8)43Yz~:f3n(0[6h">
                                                                    <field name="VAR">Zaehler</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number" id="SuwOV,9+A~U_i6//vuTt">
                                                                    <field name="NUM">2</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO1">
                                                              <block type="variables_set" id="o/E1)~7r.}VH1FA?%3BS">
                                                                <field name="VAR">PW2</field>
                                                                <value name="VALUE">
                                                                  <block type="on_source" id="=3,j*eb/KP?5:H}#kc*3">
                                                                    <field name="ATTR">state.val</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </statement>
                                                            <value name="IF2">
                                                              <block type="logic_compare" id="ls_XB|US7W[.dZ)wwDWP">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="=.X8{/c3uozWqVM~k{YY">
                                                                    <field name="VAR">Zaehler</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number" id="etQY8MCqq-2/q94vm[00">
                                                                    <field name="NUM">3</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO2">
                                                              <block type="variables_set" id="^V8GTa6#g6R/^|CD)b{k">
                                                                <field name="VAR">PW3</field>
                                                                <value name="VALUE">
                                                                  <block type="on_source" id="6ic#;v7ysd4*AmDZS3Z%">
                                                                    <field name="ATTR">state.val</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </statement>
                                                            <value name="IF3">
                                                              <block type="logic_compare" id=",b%]x[#CPH6S+yD21JNW">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                  <block type="variables_get" id="g{1iwa@8.MH(%S;cbv0/">
                                                                    <field name="VAR">Zaehler</field>
                                                                  </block>
                                                                </value>
                                                                <value name="B">
                                                                  <block type="math_number" id="L)9BsZ{Q!(_,U/z4rRMG">
                                                                    <field name="NUM">4</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <statement name="DO3">
                                                              <block type="variables_set" id="s!Be+Qrmx9Se#}JTiExX">
                                                                <field name="VAR">PW4</field>
                                                                <value name="VALUE">
                                                                  <block type="on_source" id="d=!yqPvrBZ4fKi-tHh(]">
                                                                    <field name="ATTR">state.val</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </statement>
                                                            <next>
                                                              <block type="procedures_callnoreturn" id="#JVvOAi|p76A0T.qao+R">
                                                                <mutation name="PW_Auswertung"></mutation>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </statement>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </statement>
                                              </block>
                                            </statement>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
  <block type="procedures_defcustomnoreturn" id="8Vp7XD2MNR#;u+`nx3aR" collapsed="true" x="613" y="1088">
    <mutation statements="false"></mutation>
    <field name="NAME">Anlegen der Objekte</field>
    <field name="SCRIPT">Y3JlYXRlU3RhdGUoJ2phdmFzY3JpcHQuMC5aaWZmZXJuZmVsZC5aaWZmZXItMCcsIHtuYW1lOiAiWmlmZmVyLTAifSk7DQpjcmVhdGVTdGF0ZSgnamF2YXNjcmlwdC4wLlppZmZlcm5mZWxkLlppZmZlci0xJywge25hbWU6ICJaaWZmZXItMSJ9KTsNCmNyZWF0ZVN0YXRlKCdqYXZhc2NyaXB0LjAuWmlmZmVybmZlbGQuWmlmZmVyLTInLCB7bmFtZTogIlppZmZlci0yIn0pOw0KY3JlYXRlU3RhdGUoJ2phdmFzY3JpcHQuMC5aaWZmZXJuZmVsZC5aaWZmZXItMycsIHtuYW1lOiAiWmlmZmVyLTMifSk7DQpjcmVhdGVTdGF0ZSgnamF2YXNjcmlwdC4wLlppZmZlcm5mZWxkLlppZmZlci00Jywge25hbWU6ICJaaWZmZXItNCJ9KTsNCmNyZWF0ZVN0YXRlKCdqYXZhc2NyaXB0LjAuWmlmZmVybmZlbGQuWmlmZmVyLTUnLCB7bmFtZTogIlppZmZlci01In0pOw0KY3JlYXRlU3RhdGUoJ2phdmFzY3JpcHQuMC5aaWZmZXJuZmVsZC5aaWZmZXItNicsIHtuYW1lOiAiWmlmZmVyLTYifSk7DQpjcmVhdGVTdGF0ZSgnamF2YXNjcmlwdC4wLlppZmZlcm5mZWxkLlppZmZlci03Jywge25hbWU6ICJaaWZmZXItNyJ9KTsNCmNyZWF0ZVN0YXRlKCdqYXZhc2NyaXB0LjAuWmlmZmVybmZlbGQuWmlmZmVyLTgnLCB7bmFtZTogIlppZmZlci04In0pOw0KY3JlYXRlU3RhdGUoJ2phdmFzY3JpcHQuMC5aaWZmZXJuZmVsZC5aaWZmZXItOScsIHtuYW1lOiAiWmlmZmVyLTkifSk7DQpjcmVhdGVTdGF0ZSgnamF2YXNjcmlwdC4wLlppZmZlcm5mZWxkLk5ldV9NaXNjaGVuJywge25hbWU6ICJOZXUgTWlzY2hlbiJ9KTsNCmNyZWF0ZVN0YXRlKCdqYXZhc2NyaXB0LjAuWmlmZmVybmZlbGQuUmVzZXQnLCB7bmFtZTogIkVpbmdhYmUgenVy/GNrc2V0emVuIn0pOw0KY3JlYXRlU3RhdGUoJ2phdmFzY3JpcHQuMC5aaWZmZXJuZmVsZC5BbnphaGxfZGVyX0VpbmdhYmVuJywge25hbWU6ICJBbnphaGwgZGVyIEVpbmdhYmVuIn0pOw==</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
  </block>
  <block type="procedures_defnoreturn" id="8P69P:{`cUi}KOd5plH%" collapsed="true" x="613" y="1138">
    <mutation>
      <arg name="nr_obj"></arg>
    </mutation>
    <field name="NAME">Generiere_Ziffern</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="variables_set" id="/{VVKp1s9`@gXv:K:`Di">
        <field name="VAR">V_0_bis_9</field>
        <value name="VALUE">
          <block type="math_random_int" id="H]c..~M{Tv|FGrm.n*Nd">
            <value name="FROM">
              <shadow type="math_number" id="3N=w]UFaB8Lzx#KMIz?l">
                <field name="NUM">1</field>
              </shadow>
              <block type="math_number" id="l-P@c9GY~^3{c+/Q-}5q">
                <field name="NUM">0</field>
              </block>
            </value>
            <value name="TO">
              <shadow type="math_number" id="02#-oe7S|1e?@|NGURB^">
                <field name="NUM">100</field>
              </shadow>
              <block type="math_number" id="(`YCOPRDYn]L8^|vk=Tw">
                <field name="NUM">9</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="controls_if" id="d]g5!*Yovan{Ihh+BG*R">
            <mutation else="1"></mutation>
            <value name="IF0">
              <block type="logic_compare" id="pMN]4Wv08)i@FO1:Me([" inline="false">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="lists_indexOf" id="l]ykfWLvqQq-3i%vGn.Z" inline="false">
                    <field name="END">FIRST</field>
                    <value name="VALUE">
                      <block type="lists_create_with" id="bSqLo3l}1Zsz}`(L?yvJ">
                        <mutation items="10"></mutation>
                        <value name="ADD0">
                          <block type="get_value" id="}qV3%*yGRFo-QW{}J@2b">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-0</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="get_value" id="mDntrO8XEtKLa@1@ek+R">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-1</field>
                          </block>
                        </value>
                        <value name="ADD2">
                          <block type="get_value" id="#lTkt4[4+YFQAj)hz}N8">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-2</field>
                          </block>
                        </value>
                        <value name="ADD3">
                          <block type="get_value" id="Vdl89St~uR1qRD7MGB[`">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-3</field>
                          </block>
                        </value>
                        <value name="ADD4">
                          <block type="get_value" id="q|MfD.`:d1_XJKG^YbV#">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-4</field>
                          </block>
                        </value>
                        <value name="ADD5">
                          <block type="get_value" id="g.m4tv41+9_e`g9QDvhs">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-5</field>
                          </block>
                        </value>
                        <value name="ADD6">
                          <block type="get_value" id="6XgVHv+n#|Qf)-)Y_hEg">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-6</field>
                          </block>
                        </value>
                        <value name="ADD7">
                          <block type="get_value" id="ni{}vGGCR~K{]EWug}@X">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-7</field>
                          </block>
                        </value>
                        <value name="ADD8">
                          <block type="get_value" id="JT*SgOCB1ZnwrHFSOje3">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-8</field>
                          </block>
                        </value>
                        <value name="ADD9">
                          <block type="get_value" id="{-}|hXBJt^ncLh,vCsS%">
                            <field name="ATTR">val</field>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-9</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="FIND">
                      <block type="variables_get" id="(1J1L/VAlF9)|O~ptSec">
                        <field name="VAR">V_0_bis_9</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="math_number" id="i8NVlU}SVg]iwou:Q3RJ">
                    <field name="NUM">0</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="controls_if" id="J92|c^jmrd[R|8d{+vPi">
                <mutation else="1"></mutation>
                <value name="IF0">
                  <block type="logic_compare" id="pm6Q}}-TXcIb,uYf0GI}">
                    <field name="OP">LT</field>
                    <value name="A">
                      <block type="variables_get" id="HiLd.,PGEdP9_rtG6u`e">
                        <field name="VAR">Ziel</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="math_number" id="~M4PvhQ_-/[T_hNh@6//">
                        <field name="NUM">11</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="timeouts_settimeout" id="3llI!1:[,QPby(iRvVLz">
                    <field name="NAME">timeout</field>
                    <field name="DELAY">50</field>
                    <field name="UNIT">ms</field>
                    <statement name="STATEMENT">
                      <block type="variables_set" id="~5pyNbSbsxDFY[OFFcYt">
                        <field name="VAR">Ziel</field>
                        <value name="VALUE">
                          <block type="procedures_callreturn" id="u.e[|yP-l[]zO,Q}o~)E">
                            <mutation name="Ziel_uebergabe">
                              <arg name="target"></arg>
                            </mutation>
                            <value name="ARG0">
                              <block type="variables_get" id="6^Vi4lZRLlM4])Z@k}e1">
                                <field name="VAR">Ziel</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </statement>
                  </block>
                </statement>
                <statement name="ELSE">
                  <block type="timeouts_cleartimeout" id="xTD.bs3W[t+,Coo%4zT/">
                    <field name="NAME">timeout_start_anfrage_3</field>
                    <next>
                      <block type="timeouts_settimeout" id="xns,|af9]0u^j|W)V`At">
                        <field name="NAME">timeout_start_anfrage_3</field>
                        <field name="DELAY">150</field>
                        <field name="UNIT">ms</field>
                        <statement name="STATEMENT">
                          <block type="variables_set" id="|tzV[cUhR9@^RpE{Z!m2">
                            <field name="VAR">Starte_Abfrage</field>
                            <value name="VALUE">
                              <block type="logic_boolean" id="H!~P3oPID+a%EF,w;7Hu">
                                <field name="BOOL">TRUE</field>
                              </block>
                            </value>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="control_ex" id="KQ{rvbFcHp)GoiOKH%}3">
                    <field name="TYPE">false</field>
                    <field name="CLEAR_RUNNING">FALSE</field>
                    <value name="OID">
                      <shadow type="field_oid" id="V3~{pD_M*oC^)KXlR1BI">
                        <field name="oid">Object ID</field>
                      </shadow>
                      <block type="variables_get" id="+J1k_+o))-ghH{A;Rte^">
                        <field name="VAR">nr_obj</field>
                      </block>
                    </value>
                    <value name="VALUE">
                      <shadow type="logic_boolean" id="g6*M4S|O@?7GuHYxdweD">
                        <field name="BOOL">TRUE</field>
                      </shadow>
                      <block type="variables_get" id="8^-f@xI:298wG9UVg_2H">
                        <field name="VAR">V_0_bis_9</field>
                      </block>
                    </value>
                    <value name="DELAY_MS">
                      <shadow type="math_number" id=";7/Nq.]A5PIEc{k[nW]2">
                        <field name="NUM">0</field>
                      </shadow>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <statement name="ELSE">
              <block type="timeouts_settimeout" id="x8Wf81B4RAntsWnaSla3">
                <field name="NAME">timeout7</field>
                <field name="DELAY">75</field>
                <field name="UNIT">ms</field>
                <statement name="STATEMENT">
                  <block type="procedures_callnoreturn" id="PORu:ul7X(ZKBftqoi*@">
                    <mutation name="Generiere_Ziffern">
                      <arg name="nr_obj"></arg>
                    </mutation>
                    <value name="ARG0">
                      <block type="variables_get" id="`3b.GQM=p2!2JR8ubd}f">
                        <field name="VAR">nr_obj</field>
                      </block>
                    </value>
                  </block>
                </statement>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defreturn" id="_U}Gdk^LeNBVe!0[LK#)" collapsed="true" x="613" y="1188">
    <mutation>
      <arg name="target"></arg>
    </mutation>
    <field name="NAME">Ziel_uebergabe</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="procedures_callnoreturn" id="fL^%:098,-+w!}5ZZ/x8">
        <mutation name="Generiere_Ziffern">
          <arg name="nr_obj"></arg>
        </mutation>
        <value name="ARG0">
          <block type="lists_getIndex" id="wA6r6+Z4ps8(24-A(;hj" inline="false">
            <mutation statement="false" at="true"></mutation>
            <field name="MODE">GET</field>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
              <block type="lists_create_with" id="KCho}(YIlfvLXh/hW/9#">
                <mutation items="10"></mutation>
                <value name="ADD0">
                  <block type="field_oid" id=",D,6[y/I#aQuxKZiSRXy">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-0</field>
                  </block>
                </value>
                <value name="ADD1">
                  <block type="field_oid" id="(,OZA{X!h(0A:=.k8v0l">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-1</field>
                  </block>
                </value>
                <value name="ADD2">
                  <block type="field_oid" id="^X||Z+_s!eF|m6%6Ka5B">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-2</field>
                  </block>
                </value>
                <value name="ADD3">
                  <block type="field_oid" id="RfNby_{r{q|_r`pIB}_d">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-3</field>
                  </block>
                </value>
                <value name="ADD4">
                  <block type="field_oid" id="%7faZNS8QTsx9YE/y~@A">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-4</field>
                  </block>
                </value>
                <value name="ADD5">
                  <block type="field_oid" id="7doFiMPw{Q.7CU4dAris">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-5</field>
                  </block>
                </value>
                <value name="ADD6">
                  <block type="field_oid" id="]JoXyL_l%.oF6w)v}t9S">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-6</field>
                  </block>
                </value>
                <value name="ADD7">
                  <block type="field_oid" id="-9Q9c5|PIxWA@Ae.E|g3">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-7</field>
                  </block>
                </value>
                <value name="ADD8">
                  <block type="field_oid" id="tP66o%C)AqVd^`d@i{9}">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-8</field>
                  </block>
                </value>
                <value name="ADD9">
                  <block type="field_oid" id="b;/K=v!Nw3g;.*8WY/}1">
                    <field name="oid">javascript.0.Ziffernfeld.Ziffer-9</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="AT">
              <block type="variables_get" id="pcjUOP9;zItmgm-P:jaI">
                <field name="VAR">target</field>
              </block>
            </value>
          </block>
        </value>
        <next>
          <block type="variables_set" id=";9oE,5gnP{;I][H,/tgt">
            <field name="VAR">target</field>
            <value name="VALUE">
              <block type="math_arithmetic" id="r:khxd)Y+;^H0AjORxbx">
                <field name="OP">ADD</field>
                <value name="A">
                  <shadow type="math_number" id="@9|tiBu}|9+j:1Qv5zn[">
                    <field name="NUM">1</field>
                  </shadow>
                  <block type="variables_get" id="`v%fj}_[e%6u`-dBOpPY">
                    <field name="VAR">target</field>
                  </block>
                </value>
                <value name="B">
                  <shadow type="math_number" id="LHE0TFLjQW_f}.aa~;DI">
                    <field name="NUM">1</field>
                  </shadow>
                  <block type="math_number" id="_ng:-H+QU?0?PYrmg=eP">
                    <field name="NUM">1</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </next>
      </block>
    </statement>
    <value name="RETURN">
      <block type="variables_get" id="0AWNObx7/hnn3Yq.I]_:">
        <field name="VAR">target</field>
      </block>
    </value>
  </block>
  <block type="procedures_defnoreturn" id="a~nY:*%+*7p|lwb[rPg6" collapsed="true" x="613" y="1238">
    <field name="NAME">Ziffern auf X und mischen</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="comment" id="aX1G%HMq`N9#12VJy#xy">
        <field name="COMMENT">Datenpunkt 0 - 9 zurücksetzen</field>
        <next>
          <block type="variables_set" id="+:uO|d+1gNFP^}8}WTsS">
            <field name="VAR">Starte_Abfrage</field>
            <value name="VALUE">
              <block type="logic_boolean" id="=WSk3JHGW`KvV(mIV~I{">
                <field name="BOOL">FALSE</field>
              </block>
            </value>
            <next>
              <block type="timeouts_settimeout" id="|p_!ZW;hVBH:1J_W.k(Q">
                <field name="NAME">timeout_alle_werte_x</field>
                <field name="DELAY">150</field>
                <field name="UNIT">ms</field>
                <statement name="STATEMENT">
                  <block type="control" id="[fynF_bitGq?dP=`*^9K">
                    <mutation delay_input="false"></mutation>
                    <field name="OID">javascript.0.Ziffernfeld.Ziffer-0</field>
                    <field name="WITH_DELAY">FALSE</field>
                    <value name="VALUE">
                      <block type="text" id="ErTD}+X]B+3jjk-lkgI-">
                        <field name="TEXT">X</field>
                      </block>
                    </value>
                    <next>
                      <block type="control" id="~ajdk+5fN=)xF@^*(|`W">
                        <mutation delay_input="false"></mutation>
                        <field name="OID">javascript.0.Ziffernfeld.Ziffer-1</field>
                        <field name="WITH_DELAY">FALSE</field>
                        <value name="VALUE">
                          <block type="text" id="iD/:6EaI]HKRn%m!*?12">
                            <field name="TEXT">X</field>
                          </block>
                        </value>
                        <next>
                          <block type="control" id="l?s7F1zH+.(HRe`L-opi">
                            <mutation delay_input="false"></mutation>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-2</field>
                            <field name="WITH_DELAY">FALSE</field>
                            <value name="VALUE">
                              <block type="text" id="JB9ML6=8^u9[Qr#:5@7.">
                                <field name="TEXT">X</field>
                              </block>
                            </value>
                            <next>
                              <block type="control" id="@XV!2sV3_!nc.^=;?e)2">
                                <mutation delay_input="false"></mutation>
                                <field name="OID">javascript.0.Ziffernfeld.Ziffer-3</field>
                                <field name="WITH_DELAY">FALSE</field>
                                <value name="VALUE">
                                  <block type="text" id="{-[dznum!,ZcBB^|gBB`">
                                    <field name="TEXT">X</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="control" id="-1VhZATeEg@qBz0r~xop">
                                    <mutation delay_input="false"></mutation>
                                    <field name="OID">javascript.0.Ziffernfeld.Ziffer-4</field>
                                    <field name="WITH_DELAY">FALSE</field>
                                    <value name="VALUE">
                                      <block type="text" id="y_~PVe!]1mp5!m?raV=;">
                                        <field name="TEXT">X</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="control" id="1;fX-DK6fDGHeO9sza,C">
                                        <mutation delay_input="false"></mutation>
                                        <field name="OID">javascript.0.Ziffernfeld.Ziffer-5</field>
                                        <field name="WITH_DELAY">FALSE</field>
                                        <value name="VALUE">
                                          <block type="text" id="I(3Y2^#I4}PqA06H:r9,">
                                            <field name="TEXT">X</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="control" id="14%bRcfUy/L`)bqKYe]U">
                                            <mutation delay_input="false"></mutation>
                                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-6</field>
                                            <field name="WITH_DELAY">FALSE</field>
                                            <value name="VALUE">
                                              <block type="text" id="rw/DMU!9*rskfVQ7}1l#">
                                                <field name="TEXT">X</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="control" id="SYO!2}A.m=)]8q3AEnr|">
                                                <mutation delay_input="false"></mutation>
                                                <field name="OID">javascript.0.Ziffernfeld.Ziffer-7</field>
                                                <field name="WITH_DELAY">FALSE</field>
                                                <value name="VALUE">
                                                  <block type="text" id="C?[f/cW}THHii~XY]rdQ">
                                                    <field name="TEXT">X</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="control" id="_Tu;Okon+E?Q}641UAZr">
                                                    <mutation delay_input="false"></mutation>
                                                    <field name="OID">javascript.0.Ziffernfeld.Ziffer-8</field>
                                                    <field name="WITH_DELAY">FALSE</field>
                                                    <value name="VALUE">
                                                      <block type="text" id="%@0bWNON,ebsYEyFRS|4">
                                                        <field name="TEXT">X</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="control" id="%OoT,j*^4[!N@SvGdZ]m">
                                                        <mutation delay_input="false"></mutation>
                                                        <field name="OID">javascript.0.Ziffernfeld.Ziffer-9</field>
                                                        <field name="WITH_DELAY">FALSE</field>
                                                        <value name="VALUE">
                                                          <block type="text" id="T2}ePcRLFhS)CS{sHmj-">
                                                            <field name="TEXT">X</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="timeouts_settimeout" id="t*|woZwN0YrAPAeoWAjR">
                    <field name="NAME">timeout_mischen_oder_setzen</field>
                    <field name="DELAY">300</field>
                    <field name="UNIT">ms</field>
                    <statement name="STATEMENT">
                      <block type="controls_if" id="H;rxUMqNASe2/lTdxQAH">
                        <mutation else="1"></mutation>
                        <value name="IF0">
                          <block type="logic_compare" id="}`yjcw`cNK]bM}E?CE,_">
                            <field name="OP">EQ</field>
                            <value name="A">
                              <block type="variables_get" id="|.zrvS.]}E%JlX?tmEE,">
                                <field name="VAR">Mischen</field>
                              </block>
                            </value>
                            <value name="B">
                              <block type="logic_boolean" id="W0fC68}o+]wYlS4)(cs#">
                                <field name="BOOL">TRUE</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="timeouts_settimeout" id="MKhGq,%%kVTJtmm/-A@k">
                            <field name="NAME">timeout_start_mischen</field>
                            <field name="DELAY">500</field>
                            <field name="UNIT">ms</field>
                            <statement name="STATEMENT">
                              <block type="variables_set" id="Sgz2pZ(4hp91}2o-dib]">
                                <field name="VAR">Ziel</field>
                                <value name="VALUE">
                                  <block type="math_number" id="`Tt`fYCX5^(hP=hV1Y3M">
                                    <field name="NUM">1</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="variables_set" id="zIAT],aP9CLYc7}2fCNl">
                                    <field name="VAR">Ziel</field>
                                    <value name="VALUE">
                                      <block type="procedures_callreturn" id="ag6+pleBJLBI-v/%gx(}">
                                        <mutation name="Ziel_uebergabe">
                                          <arg name="target"></arg>
                                        </mutation>
                                        <value name="ARG0">
                                          <block type="variables_get" id="}+WZI=Y|Z@.`zsxd[bGO">
                                            <field name="VAR">Ziel</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </statement>
                        <statement name="ELSE">
                          <block type="control" id="J6{+jjG/B9{6y:rp6?+G">
                            <mutation delay_input="false"></mutation>
                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-0</field>
                            <field name="WITH_DELAY">FALSE</field>
                            <value name="VALUE">
                              <block type="math_number" id=".C.{GbYWxZGXrRI]~h2+">
                                <field name="NUM">0</field>
                              </block>
                            </value>
                            <next>
                              <block type="control" id="@d+f.va:fB+c-?,YJ9c,">
                                <mutation delay_input="false"></mutation>
                                <field name="OID">javascript.0.Ziffernfeld.Ziffer-1</field>
                                <field name="WITH_DELAY">FALSE</field>
                                <value name="VALUE">
                                  <block type="math_number" id="BM]3`08GsWK3J|pH2uWc">
                                    <field name="NUM">1</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="control" id="Y0w+@+WPP]})?jp{(gJB">
                                    <mutation delay_input="false"></mutation>
                                    <field name="OID">javascript.0.Ziffernfeld.Ziffer-2</field>
                                    <field name="WITH_DELAY">FALSE</field>
                                    <value name="VALUE">
                                      <block type="math_number" id=",TD.g722HEA~tLiP!s*S">
                                        <field name="NUM">2</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="control" id="#JJ;c9,c+^E9r3c?:T{0">
                                        <mutation delay_input="false"></mutation>
                                        <field name="OID">javascript.0.Ziffernfeld.Ziffer-3</field>
                                        <field name="WITH_DELAY">FALSE</field>
                                        <value name="VALUE">
                                          <block type="math_number" id="Z#HZO`p|WxmR{HLa8[Q)">
                                            <field name="NUM">3</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="control" id="nu.g:}v|-EH+5h`([QNX">
                                            <mutation delay_input="false"></mutation>
                                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-4</field>
                                            <field name="WITH_DELAY">FALSE</field>
                                            <value name="VALUE">
                                              <block type="math_number" id="iz]l?0Lc8lV*PG39^F3#">
                                                <field name="NUM">4</field>
                                              </block>
                                            </value>
                                            <next>
                                              <block type="control" id="J5EI*N?8}5`%AXF_g2@l">
                                                <mutation delay_input="false"></mutation>
                                                <field name="OID">javascript.0.Ziffernfeld.Ziffer-5</field>
                                                <field name="WITH_DELAY">FALSE</field>
                                                <value name="VALUE">
                                                  <block type="math_number" id="aUv9Ba6xQpLT2%(m2,^H">
                                                    <field name="NUM">5</field>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="control" id="j[_5Nw=BuDfAoJNw;,bH">
                                                    <mutation delay_input="false"></mutation>
                                                    <field name="OID">javascript.0.Ziffernfeld.Ziffer-6</field>
                                                    <field name="WITH_DELAY">FALSE</field>
                                                    <value name="VALUE">
                                                      <block type="math_number" id=")C#[j-J]Hi@qxlF[,jZ3">
                                                        <field name="NUM">6</field>
                                                      </block>
                                                    </value>
                                                    <next>
                                                      <block type="control" id="?z!ua74b~,3G,d?.DSYB">
                                                        <mutation delay_input="false"></mutation>
                                                        <field name="OID">javascript.0.Ziffernfeld.Ziffer-7</field>
                                                        <field name="WITH_DELAY">FALSE</field>
                                                        <value name="VALUE">
                                                          <block type="math_number" id="+=C=M.V@5yyjpS1+PIWc">
                                                            <field name="NUM">7</field>
                                                          </block>
                                                        </value>
                                                        <next>
                                                          <block type="control" id="zU;ixsWhUq-ClNt/YRe~">
                                                            <mutation delay_input="false"></mutation>
                                                            <field name="OID">javascript.0.Ziffernfeld.Ziffer-8</field>
                                                            <field name="WITH_DELAY">FALSE</field>
                                                            <value name="VALUE">
                                                              <block type="math_number" id="m_QHzc=Fs^;zu28BN{Iv">
                                                                <field name="NUM">8</field>
                                                              </block>
                                                            </value>
                                                            <next>
                                                              <block type="control" id="V*1oh{dvq)-hA6M?NWgd">
                                                                <mutation delay_input="false"></mutation>
                                                                <field name="OID">javascript.0.Ziffernfeld.Ziffer-9</field>
                                                                <field name="WITH_DELAY">FALSE</field>
                                                                <value name="VALUE">
                                                                  <block type="math_number" id="D4Zz?*L9.uEg_k=h~s,%">
                                                                    <field name="NUM">9</field>
                                                                  </block>
                                                                </value>
                                                                <next>
                                                                  <block type="timeouts_settimeout" id="1-kna@l@NwmAQzXRwU*?">
                                                                    <field name="NAME">timeout_start_anfrage_4</field>
                                                                    <field name="DELAY">600</field>
                                                                    <field name="UNIT">ms</field>
                                                                    <statement name="STATEMENT">
                                                                      <block type="variables_set" id="-B(+kGk@h8IwDk??;=bc">
                                                                        <field name="VAR">Starte_Abfrage</field>
                                                                        <value name="VALUE">
                                                                          <block type="logic_boolean" id="j]__Gn)1h1l^G}XZ[9Zc">
                                                                            <field name="BOOL">TRUE</field>
                                                                          </block>
                                                                        </value>
                                                                      </block>
                                                                    </statement>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" id="7|2v+ZuG5b{ysmGP.sYB" collapsed="true" x="613" y="1288">
    <field name="NAME">Durchgang_beendet</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="controls_if" id=";#h6+Ukl+jADlj3Ar@T.">
        <mutation else="1"></mutation>
        <value name="IF0">
          <block type="logic_operation" id="~r:%W#k|/ON6B4!*qlMW" inline="false">
            <field name="OP">OR</field>
            <value name="A">
              <block type="logic_compare" id="9gYKTe(vFUh!#;^DKQ|#">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="variables_get" id="*H4t%FWT%/c}{X}sBfsM">
                    <field name="VAR">Mischen</field>
                  </block>
                </value>
                <value name="B">
                  <block type="logic_boolean" id="Q/~yV?_381~,m:nzp[V5">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="B">
              <block type="logic_compare" id="voS88W3[{:z^y=0NE#3D">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="variables_get" id="y@TpT*0UiS.,52{x}KB!">
                    <field name="VAR">Immer Mischen</field>
                  </block>
                </value>
                <value name="B">
                  <block type="logic_boolean" id="uIuVo7pIxDc-OOD1)t`|">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="procedures_callnoreturn" id="r.);P?@@!}Nxs.~7Q0S|">
            <mutation name="Ziffern auf X und mischen"></mutation>
          </block>
        </statement>
        <statement name="ELSE">
          <block type="timeouts_settimeout" id="Ziw|[qdXbA(129ZE^A/A">
            <field name="NAME">timeout_start_anfrage_2</field>
            <field name="DELAY">1000</field>
            <field name="UNIT">ms</field>
            <statement name="STATEMENT">
              <block type="variables_set" id="SM#c(2NpT1wKr7fU-d/q">
                <field name="VAR">Starte_Abfrage</field>
                <value name="VALUE">
                  <block type="logic_boolean" id="lcEXEU!|~YVjM2xBB;)!">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
              </block>
            </statement>
          </block>
        </statement>
        <next>
          <block type="timeouts_settimeout" id="bKp|MJRu+~,1Shf8_MH/">
            <field name="NAME">timeout_PW_Falsch</field>
            <field name="DELAY">2000</field>
            <field name="UNIT">ms</field>
            <statement name="STATEMENT">
              <block type="procedures_callnoreturn" id="QaDP8KP|W/~?ZC:N@+|n">
                <mutation name="Zaehler und PW zuruecksetzen"></mutation>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" id="{_@gL?Kw;vbYj{n{G.0W" collapsed="true" x="613" y="1338">
    <field name="NAME">Passwort Richtig</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="comment" id="Y#XvF9L]O9RkU|}TqW-:">
        <field name="COMMENT">PW-Richtig</field>
        <next>
          <block type="control" id="sD5~D1W~fU7rHtANB-~^">
            <mutation delay_input="false"></mutation>
            <field name="OID">javascript.0.Ziffernfeld.Anzahl_der_Eingaben</field>
            <field name="WITH_DELAY">FALSE</field>
            <value name="VALUE">
              <block type="text" id="zU;3`DLJ5toS7eU(y^Ck">
                <field name="TEXT">Passwort Richtig</field>
              </block>
            </value>
            <next>
              <block type="procedures_callnoreturn" id="JKsS_g8;F@.6Oz_ED577">
                <mutation name="Durchgang_beendet"></mutation>
                <next>
                  <block type="comment" id="BG=+*UP)U-fz+1WUwfqt">
                    <field name="COMMENT">Wird ausgeführt, wenn Passwort 1 richtig ist.</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" id="%NzQsgITA=3E5(vQ}Qz4" collapsed="true" x="613" y="1388">
    <field name="NAME">Passwort Falsch</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="comment" id="fex@c`0L2QKZBvdJ,^..">
        <field name="COMMENT">PW-Falsch</field>
        <next>
          <block type="control" id="-9he.3}=`)ny,o[}m8F!">
            <mutation delay_input="false"></mutation>
            <field name="OID">javascript.0.Ziffernfeld.Anzahl_der_Eingaben</field>
            <field name="WITH_DELAY">FALSE</field>
            <value name="VALUE">
              <block type="text" id="YYA@@ngitq@_-+em|!EU">
                <field name="TEXT">Passwort Falsch</field>
              </block>
            </value>
            <next>
              <block type="procedures_callnoreturn" id="O#K)uU4j6u9UlWT9l3vR">
                <mutation name="Durchgang_beendet"></mutation>
                <next>
                  <block type="comment" id="M%o4CgU:MQIf%nh@Nu8}">
                    <field name="COMMENT">Wird ausgeführt, wenn das Passwort falsch ist.</field>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" id=":Fgt!D?/XrE*BU%@FDeQ" x="163" y="1413">
    <field name="NAME">PW_Auswertung</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="controls_if" id="m:_79S}h)IGzh-SWvN?[" collapsed="true">
        <mutation elseif="2"></mutation>
        <value name="IF0">
          <block type="logic_compare" id="yOV1@|arW=PnDQe[@Fdj">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="variables_get" id="g0xx)vL4a{)QO11OaP=Z">
                <field name="VAR">Zaehler</field>
              </block>
            </value>
            <value name="B">
              <block type="math_number" id="yN{Y=x4hQDCF!=k#dE:U">
                <field name="NUM">1</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="control" id="ghGR@HpdqbOhL=_eZw:g">
            <mutation delay_input="false"></mutation>
            <field name="OID">javascript.0.Ziffernfeld.Anzahl_der_Eingaben</field>
            <field name="WITH_DELAY">FALSE</field>
            <value name="VALUE">
              <block type="text" id="YHz6J6db2OLG?N3=[CA(">
                <field name="TEXT">x _ _ _</field>
              </block>
            </value>
            <next>
              <block type="controls_if" id="@RyID=cagS9:egHabI^5">
                <value name="IF0">
                  <block type="logic_compare" id="s7b{*+Y=9V]K5/d+(lg!">
                    <field name="OP">EQ</field>
                    <value name="A">
                      <block type="variables_get" id="~^b(pj}twJ/9KhSV,`l,">
                        <field name="VAR">Immer Mischen</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="logic_boolean" id="aoEr^o`F4xx**nON[r1k">
                        <field name="BOOL">TRUE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="procedures_callnoreturn" id="05TkvkXP}@@}^V}(BK~`">
                    <mutation name="Ziffern auf X und mischen"></mutation>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </statement>
        <value name="IF1">
          <block type="logic_compare" id="CGjtw4KHxR4y3Cf_aptQ">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="variables_get" id="N}mB/zv,YcjeYj;9FOc{">
                <field name="VAR">Zaehler</field>
              </block>
            </value>
            <value name="B">
              <block type="math_number" id="nBKmMWK.3|7|,-k(h9?X">
                <field name="NUM">2</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO1">
          <block type="control" id=":x7bsy{IaAWrv}lnM~=M">
            <mutation delay_input="false"></mutation>
            <field name="OID">javascript.0.Ziffernfeld.Anzahl_der_Eingaben</field>
            <field name="WITH_DELAY">FALSE</field>
            <value name="VALUE">
              <block type="text" id="mo]?SXd@|}P#f=4s~FHR">
                <field name="TEXT">x x _ _</field>
              </block>
            </value>
            <next>
              <block type="controls_if" id="hJg7j]c9R*E{LqPcXS_Q">
                <value name="IF0">
                  <block type="logic_compare" id="IVxMZ8p5!)RUiRko/~bO">
                    <field name="OP">EQ</field>
                    <value name="A">
                      <block type="variables_get" id="yigILEc[Uzjk:=Pw0Rdu">
                        <field name="VAR">Immer Mischen</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="logic_boolean" id="?_z{W^:qx^/E6cK?3)yO">
                        <field name="BOOL">TRUE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="procedures_callnoreturn" id="89Y9rd^}32d2:PDr=2kr">
                    <mutation name="Ziffern auf X und mischen"></mutation>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </statement>
        <value name="IF2">
          <block type="logic_compare" id="y!Lcwk^X`DR.(+(%TUO1">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="variables_get" id="czHcaG|}Njo~G4Aw?cX1">
                <field name="VAR">Zaehler</field>
              </block>
            </value>
            <value name="B">
              <block type="math_number" id="CJvcY{-p9WTO+w/R9Zsb">
                <field name="NUM">3</field>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO2">
          <block type="control" id="t@9v6ypJ:K_=4ES0v6EU">
            <mutation delay_input="false"></mutation>
            <field name="OID">javascript.0.Ziffernfeld.Anzahl_der_Eingaben</field>
            <field name="WITH_DELAY">FALSE</field>
            <value name="VALUE">
              <block type="text" id="Xbzrn|[KEQ@Ni,-?(b}r">
                <field name="TEXT">x x x _</field>
              </block>
            </value>
            <next>
              <block type="controls_if" id="GGG#*{q~:~Csxi8-*A8:">
                <value name="IF0">
                  <block type="logic_compare" id="3WfXs8hu#9!-z/OgXbp/">
                    <field name="OP">EQ</field>
                    <value name="A">
                      <block type="variables_get" id="o]~~m*k6O.?|+%ws@.}x">
                        <field name="VAR">Immer Mischen</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="logic_boolean" id="ad/bEP=ZS{3([2F:jXS{">
                        <field name="BOOL">TRUE</field>
                      </block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="procedures_callnoreturn" id="7)-]Mof%57q#lxD+sU^j">
                    <mutation name="Ziffern auf X und mischen"></mutation>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="controls_if" id="G8/j9xh))P9S28YP{.o.">
            <value name="IF0">
              <block type="logic_compare" id="j?,zeyYbA8MJEJas7n=Q" collapsed="true">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="variables_get" id="SO*UBoH%q|Y:+|0.`oK1">
                    <field name="VAR">Zaehler</field>
                  </block>
                </value>
                <value name="B">
                  <block type="math_number" id="*tZ4%m#X7;]yg;-B:0,a">
                    <field name="NUM">4</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="control" id="k0G4;xQVE.Nv[jA]b!kv" collapsed="true">
                <mutation delay_input="false"></mutation>
                <field name="OID">javascript.0.Ziffernfeld.Anzahl_der_Eingaben</field>
                <field name="WITH_DELAY">FALSE</field>
                <value name="VALUE">
                  <block type="text" id="zF_lIQ68nwqu[-;R:GI(">
                    <field name="TEXT">x x x x</field>
                  </block>
                </value>
                <next>
                  <block type="variables_set" id="LdgI/#%ucNGK5Nl`s4px" collapsed="true">
                    <field name="VAR">PW_Eingabe</field>
                    <value name="VALUE">
                      <block type="convert_tonumber" id="0hE]k~+2f;F^,t._4~e}">
                        <value name="VALUE">
                          <block type="lists_create_with" id="AumpF5uhN,a-ThXmOng2">
                            <mutation items="4"></mutation>
                            <value name="ADD0">
                              <block type="variables_get" id="HnP.hknhwbsK7%)HK:-~">
                                <field name="VAR">PW1</field>
                              </block>
                            </value>
                            <value name="ADD1">
                              <block type="variables_get" id="mr8]o3s(NFc0gie7TVks">
                                <field name="VAR">PW2</field>
                              </block>
                            </value>
                            <value name="ADD2">
                              <block type="variables_get" id=";EY/QFGeq~9Yf^/A:ITh">
                                <field name="VAR">PW3</field>
                              </block>
                            </value>
                            <value name="ADD3">
                              <block type="variables_get" id="puW=#Z]D7BWDKOJ3~TQA">
                                <field name="VAR">PW4</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="timeouts_settimeout" id="WV^Y#=|u!VuiAvrj!BT|">
                        <field name="NAME">timeout_PW_Auswertung</field>
                        <field name="DELAY">100</field>
                        <field name="UNIT">ms</field>
                        <statement name="STATEMENT">
                          <block type="controls_if" id="@Jl`Bv2/Z`C]q,?+`^2e">
                            <mutation else="1"></mutation>
                            <value name="IF0">
                              <block type="logic_compare" id="RR^H[^SuUm!P~0)Iz;G3">
                                <field name="OP">EQ</field>
                                <value name="A">
                                  <block type="variables_get" id="`xIpqh|/a0t%oaM!HpsN">
                                    <field name="VAR">PW_Eingabe</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <block type="convert_tonumber" id="xOzONdxpAp2UVxK36G|-">
                                    <value name="VALUE">
                                      <block type="lists_create_with" id="yp*VhNSZ~sKl5NFz{B~y">
                                        <mutation items="4"></mutation>
                                        <value name="ADD0">
                                          <block type="math_number" id="HvG=^A`(|0lQn,CLy8ib">
                                            <field name="NUM">1</field>
                                          </block>
                                        </value>
                                        <value name="ADD1">
                                          <block type="math_number" id="vF5me;:(jg.2m@^G}kVZ">
                                            <field name="NUM">2</field>
                                          </block>
                                        </value>
                                        <value name="ADD2">
                                          <block type="math_number" id="b?Bv4vVg~EaRCOCAE[i?">
                                            <field name="NUM">3</field>
                                          </block>
                                        </value>
                                        <value name="ADD3">
                                          <block type="math_number" id="v;XI{BEI.us]y?turnDP">
                                            <field name="NUM">4</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <statement name="DO0">
                              <block type="procedures_callnoreturn" id="di)7q259|5Qzv@?]6]F/">
                                <mutation name="Passwort Richtig"></mutation>
                                <next>
                                  <block type="procedures_callnoreturn" id="dEv{;QdTEDRC!d=uY=)e">
                                    <mutation name="Telegram-Benachrichtigung">
                                      <arg name="Telegram_Text"></arg>
                                      <arg name="Telegram_Empfaenger"></arg>
                                    </mutation>
                                    <value name="ARG0">
                                      <block type="text" id="_4Xe,937*L5;-8d]ETMU">
                                        <field name="TEXT">Passwort 1 Richtig</field>
                                      </block>
                                    </value>
                                    <value name="ARG1">
                                      <block type="text" id="*x]=W=rzU](RBq9cg127">
                                        <field name="TEXT">Sven</field>
                                      </block>
                                    </value>
                                  </block>
                                </next>
                              </block>
                            </statement>
                            <statement name="ELSE">
                              <block type="comment" id="w?7.,n#-v!g0irgg8nfn">
                                <field name="COMMENT">Aktion bei falscher Passworteingabe</field>
                                <next>
                                  <block type="procedures_callnoreturn" id="@go`nL)Ry2|Xl*|9=O4,">
                                    <mutation name="Passwort Falsch"></mutation>
                                    <next>
                                      <block type="procedures_callnoreturn" id="Lq2!wJYP;qjgm@aR2:LN">
                                        <mutation name="Telegram-Benachrichtigung">
                                          <arg name="Telegram_Text"></arg>
                                          <arg name="Telegram_Empfaenger"></arg>
                                        </mutation>
                                        <value name="ARG0">
                                          <block type="text" id="M{X=R4^U`F8qa-^J#%9:">
                                            <field name="TEXT">Passwort Falsch</field>
                                          </block>
                                        </value>
                                        <value name="ARG1">
                                          <block type="text" id="oql(WG9cM%l/t]h2lx14">
                                            <field name="TEXT">Sven</field>
                                          </block>
                                        </value>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </statement>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" id="Unaog%}s#YZZwhs%|xC-" collapsed="true" x="613" y="1438">
    <field name="NAME">Zaehler und PW zuruecksetzen</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="control" id="hBkw5xfk|X#n!WdYa=tI">
        <mutation delay_input="false"></mutation>
        <field name="OID">javascript.0.Ziffernfeld.Reset</field>
        <field name="WITH_DELAY">FALSE</field>
        <value name="VALUE">
          <block type="logic_boolean" id="*_AyDdZD1y0ZKa]|tnAk">
            <field name="BOOL">FALSE</field>
          </block>
        </value>
        <next>
          <block type="control" id="EyKS+zpnCb`zKd=1!YXy">
            <mutation delay_input="false"></mutation>
            <field name="OID">javascript.0.Ziffernfeld.Neu_Mischen</field>
            <field name="WITH_DELAY">FALSE</field>
            <value name="VALUE">
              <block type="logic_boolean" id="Oo1ZLx6,as.Ru(PLz1Re">
                <field name="BOOL">FALSE</field>
              </block>
            </value>
            <next>
              <block type="comment" id="9T=WGR#Ei2bvVq?)K^3]">
                <field name="COMMENT">Variabelen zurücksetzen</field>
                <next>
                  <block type="variables_set" id="4i*vm:yA0dr.r1kF~(S@">
                    <field name="VAR">Zaehler</field>
                    <value name="VALUE">
                      <block type="math_number" id="[c(qL97/Nw60rlb?*NLn">
                        <field name="NUM">0</field>
                      </block>
                    </value>
                    <next>
                      <block type="variables_set" id="ZkIv-XJ@`7x%0F#bKb:S">
                        <field name="VAR">PW1</field>
                        <value name="VALUE">
                          <block type="math_number" id="}9nENv)(Tv#zoV{Dm7d{">
                            <field name="NUM">0</field>
                          </block>
                        </value>
                        <next>
                          <block type="variables_set" id="f:]^0r5*X[9XAOae5[8V">
                            <field name="VAR">PW2</field>
                            <value name="VALUE">
                              <block type="math_number" id="qIbTs}H:JcbVxi9a!Iq!">
                                <field name="NUM">0</field>
                              </block>
                            </value>
                            <next>
                              <block type="variables_set" id="lHH+xVh][MuK+gwqFOh`">
                                <field name="VAR">PW3</field>
                                <value name="VALUE">
                                  <block type="math_number" id="BwsSaChk7w`%vHu.`Hs|">
                                    <field name="NUM">0</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="variables_set" id="z0.hooFqcy7ua4(Hbaf_">
                                    <field name="VAR">PW4</field>
                                    <value name="VALUE">
                                      <block type="math_number" id=".zpOpXHpy1vR[x.,(Fd7">
                                        <field name="NUM">0</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="control" id="d)73wZ/@NcWeSGaOm?7|">
                                        <mutation delay_input="false"></mutation>
                                        <field name="OID">javascript.0.Ziffernfeld.Anzahl_der_Eingaben</field>
                                        <field name="WITH_DELAY">FALSE</field>
                                        <value name="VALUE">
                                          <block type="text" id="fvXy@jWJ#._[nlJDro/.">
                                            <field name="TEXT">_ _ _ _</field>
                                          </block>
                                        </value>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" id=",NAjY]*gnG5[S~zxqt5%" collapsed="true" x="613" y="1488">
    <mutation>
      <arg name="Telegram_Text"></arg>
      <arg name="Telegram_Empfaenger"></arg>
    </mutation>
    <field name="NAME">Telegram-Benachrichtigung</field>
    <comment pinned="false" h="80" w="160">Beschreibe diese Funktion …</comment>
    <statement name="STACK">
      <block type="telegram" id="inDfH8rWh::mIJjNDqO|">
        <field name="INSTANCE"></field>
        <field name="LOG"></field>
        <field name="SILENT">FALSE</field>
        <field name="PARSEMODE">default</field>
        <value name="MESSAGE">
          <shadow type="text" id="_rX@A[I`~sxbvHI5tk@o">
            <field name="TEXT">text</field>
          </shadow>
          <block type="variables_get" id="koD7~wq9%VQ@R#7.#vq2">
            <field name="VAR">Telegram_Text</field>
          </block>
        </value>
        <value name="USERNAME">
          <block type="variables_get" id="wvmL+?%0i=qIYlYyW[Tw">
            <field name="VAR">Telegram_Empfaenger</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
  <block type="procedures_callnoreturn" id="9b47.~9IMYx`g2[m^GGD" x="-112" y="3468">
    <mutation name="PW_Auswertung"></mutation>
  </block>
</xml>