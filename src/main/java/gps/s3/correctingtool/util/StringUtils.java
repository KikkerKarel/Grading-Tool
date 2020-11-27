package gps.s3.correctingtool.util;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class StringUtils {

    public static final List<String> SYMBOLS = List.of(":", ",", "-", "!", "_", "[", "]", "?", "~");

    public static String removeSymbols(String str)
    {
        for(String symbol: SYMBOLS)
        {
            str = str.replace(symbol, "");
        }

        return str;
    }

    public static boolean compareWords(String a, String b)
    {
        return removeSymbols(a)
                .equalsIgnoreCase
                (removeSymbols(b));
    }

    public static List<String> toWords(String text)
    {
        return Arrays.asList(text.split("\\s+"));
    }

    public static Set<String> toUniqueWords(String text)
    {
        return new HashSet<>(toWords(text));
    }

}
