/* Это автоматически сгенерированный файл. */
module.exports = {
    "i-tanker__days": {
        "acc1": "у панядзелак",
        "acc2": "у аўторак",
        "acc3": "у сераду",
        "acc4": "у чацвер",
        "acc5": "у пятніцу",
        "acc6": "у суботу",
        "acc7": "у нядзелю",
        "n1": "панядзелак",
        "n2": "аўторак",
        "n3": "серада",
        "n4": "чацвер",
        "n5": "пятніца",
        "n6": "субота",
        "n7": "нядзеля",
        "name": "<i18n:dynamic>\n   <i18n:js>\n       return i18n['tanker']['days'][(params['short'] ? 'short' : 'n') + params.day]();\n   </i18n:js>\n   <i18n:xsl>\n       <xsl:param name=\"day\"/>\n       <xsl:param name=\"short\" select=\"false()\"/>\n       <xsl:choose>\n           <xsl:when test=\"$short\">\n               <xsl:choose>\n                   <xsl:when test=\"$day = 1\"><xsl:call-template name=\"i18n:tanker.days.short1\"/></xsl:when>\n                   <xsl:when test=\"$day = 2\"><xsl:call-template name=\"i18n:tanker.days.short2\"/></xsl:when>\n                   <xsl:when test=\"$day = 3\"><xsl:call-template name=\"i18n:tanker.days.short3\"/></xsl:when>\n                   <xsl:when test=\"$day = 4\"><xsl:call-template name=\"i18n:tanker.days.short4\"/></xsl:when>\n                   <xsl:when test=\"$day = 5\"><xsl:call-template name=\"i18n:tanker.days.short5\"/></xsl:when>\n                   <xsl:when test=\"$day = 6\"><xsl:call-template name=\"i18n:tanker.days.short6\"/></xsl:when>\n                   <xsl:when test=\"$day = 7\"><xsl:call-template name=\"i18n:tanker.days.short7\"/></xsl:when>\n               </xsl:choose>\n           </xsl:when>\n           <xsl:otherwise>\n               <xsl:choose>\n                   <xsl:when test=\"$day = 1\"><xsl:call-template name=\"i18n:tanker.days.n1\"/></xsl:when>\n                   <xsl:when test=\"$day = 2\"><xsl:call-template name=\"i18n:tanker.days.n2\"/></xsl:when>\n                   <xsl:when test=\"$day = 3\"><xsl:call-template name=\"i18n:tanker.days.n3\"/></xsl:when>\n                   <xsl:when test=\"$day = 4\"><xsl:call-template name=\"i18n:tanker.days.n4\"/></xsl:when>\n                   <xsl:when test=\"$day = 5\"><xsl:call-template name=\"i18n:tanker.days.n5\"/></xsl:when>\n                   <xsl:when test=\"$day = 6\"><xsl:call-template name=\"i18n:tanker.days.n6\"/></xsl:when>\n                   <xsl:when test=\"$day = 7\"><xsl:call-template name=\"i18n:tanker.days.n7\"/></xsl:when>\n               </xsl:choose>\n           </xsl:otherwise>\n       </xsl:choose>\n   </i18n:xsl>\n   <i18n:tt2>\n       l10n('tanker.days.' _ (params.short ? 'short' : 'n') _ params.day);\n   </i18n:tt2>\n</i18n:dynamic>",
        "short1": "пн",
        "short2": "аўт",
        "short3": "сер",
        "short4": "чц",
        "short5": "пт",
        "short6": "сб",
        "short7": "нд"
    }
};