
// Toggle Sidebar

$(document).ready(function () {
	$("button").click(function () {
		$(".navi").toggleClass("active");
		$(".nav").toggleClass("empty");
		$("#Head").toggleClass("active");
		$(".main").toggleClass("active");
	});
});

$(document).ready(function() {
  applyMailTo();
  checkHash();
  checkBrowser();
  plusToggle();
  toggleMenu();
});


/* MAILTO FUNCTION */

function applyMailTo() {
  $("a[href*=mailto]").on("click", function(e) {
    var lstrEmail = $(this)
      .attr("href")
      .replace("mailto:", "");

    lstrEmail = lstrEmail
      .split("")
      .reverse()
      .join("");

    $(this).attr("href", "mailto:" + lstrEmail);
  });
}

/* HASH FUNCTION */

function checkHash() {
  lstrHash = window.location.hash.replace("#/", "#");

  if ($("a[href=" + lstrHash + "]").length > 0) {
    $("a[href=" + lstrHash + "]").trigger("click");
  }
}

/* IE7- FALLBACK FUNCTIONS */

function checkBrowser() {
  var loBrowserVersion = getBrowserAndVersion();

  if (loBrowserVersion.browser == "Explorer" && loBrowserVersion.version < 8) {
    $("#upgrade-dialog").modal({
      backdrop: "static",
      keyboard: false
    });
  }
}

function getBrowserAndVersion() {
  var laBrowserData = [
    {
      string: navigator.userAgent,
      subString: "MSIE",
      identity: "Explorer",
      versionSearch: "MSIE"
    }
  ];

  return {
    browser: searchString(laBrowserData) || "Modern Browser",
    version:
      searchVersion(navigator.userAgent) ||
      searchVersion(navigator.appVersion) ||
      "0.0"
  };
}

function searchString(paData) {
  for (var i = 0; i < paData.length; i++) {
    var lstrDataString = paData[i].string;
    var lstrDataProp = paData[i].prop;

    this.versionSearchString = paData[i].versionSearch || paData[i].identity;

    if (lstrDataString) {
      if (lstrDataString.indexOf(paData[i].subString) != -1) {
        return paData[i].identity;
      }
    } else if (lstrDataProp) {
      return paData[i].identity;
    }
  }
}

function searchVersion(pstrDataString) {
  var lnIndex = pstrDataString.indexOf(this.versionSearchString);

  if (lnIndex == -1) {
    return;
  }

  return parseFloat(
    pstrDataString.substring(lnIndex + this.versionSearchString.length + 1)
  );
}

// groups dropdown
function plusToggle() {
  $(".fa").click(function() {
    $(this)
      .toggleClass("fa-plus-circle")
      .toggleClass("fa-minus-circle");
  });
}
