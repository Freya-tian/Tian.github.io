<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>
   
    <xsl:template match="/">
        <html>
            <body>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                    <xsl:apply-template /> 
                </math> 
            </body>
        </html>
                       
    </xsl:template>
    <xsl:template match = "корень">
        <msqrt>
            <xsl:apply-template select = '*'/> 
        </msqrt>
    </xsl:template>
    <xsl:template match = "строка">
        <mrow>
            <xsl:apply-template select = '*'/> 
        </mrow>
    </xsl:template>
    <xsl:template match = "дробь">
        <mfrac>
            <mn> <xsl:value-of select = './строка/число'/>  </mi>
            <mi> <xsl:value-of select = './строка/операнд'/>  </mi>
        </mfrac>
    </xsl:template>
    <xsl:template match = "низверх">
        <munderover>
            <xsl:apply-template select = '*'/> 
        </munderover>
    </xsl:template>
    <xsl:template match = "оператор">
        <mo>
            <xsl:value-of select = '.'/> 
        </mo>
    </xsl:template>
    <xsl:template match = "операнд">
        <mi>
            <xsl:value-of select = '.'/> 
        </mi>
    </xsl:template>
      <xsl:template match = "число">
        <mn>
            <xsl:value-of select = '.'/> 
        </mn>
    </xsl:template>
    <xsl:template match = "верх">
        <msup>
            <xsl:apply-template select = '*'/> 
        </msup>
    </xsl:template>
    <xsl:template match = "низ">
        <msub>
            <xsl:apply-template select = '*'/> 
        </msub>
    </xsl:template>
    
</xsl:stylesheet>