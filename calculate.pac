PROGRAM Calculate;
USES Crt, SysUtils;

FUNCTION toHectopascal(num: REAL): REAL;
VAR
    result: REAL;

BEGIN
    result := (num / 100);
    toHectopascal := result;
END;

FUNCTION toPascal(num: REAL): REAL;
VAR
    result: REAL;

BEGIN
    WRITELN('Num', num);
    result := (num * 100);
    toPascal := result;
END;


//MAIN
VAR
    convertWay : INTEGER;
    input: REAL;
    converted: REAL;
BEGIN
    REPEAT
        ClrScr;
        WRITELN('Which direction should the convertion be?');
        WRITELN('0   -   Pascal to hectopascal');
        WRITELN('1   -   Hectopascal to pascal');
        
        READLN(convertWay);
    UNTIL (convertWay = 0) OR (convertWay = 1);

    CASE convertWay of
        0:
            BEGIN
                WRITELN('Put in the pascal value');
                READLN(input);
                converted := toHectopascal(input);
                WRITELN('Result: ', converted ,'hPa');
            END;
        1:
            BEGIN
                WRITELN('Put in the hectopascal value');
                READLN(input);
                converted := toPascal(input);
                WRITELN('Result: ', converted, 'Pa');
            END;
    END;
END.